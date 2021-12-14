import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  fetchProductProducers,
} from "../actions/ProductActions";
import ProductFull from "../components/ProductFull";
import styled from "styled-components";
import { analytics } from "../Firebase";
import ShopSidebar from "../components/ShopSidebar";
import { isBrowser } from "react-device-detect";
import { device } from "../utils/devices";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import qs from "qs";
import LoginModal from "../components/LoginModal";

const DEBOUNCE_TIME = 700;
const searchClient = algoliasearch(
  "VLXSKNYQRF",
  "88d8816875da387bcb87952abcdc719f"
);

const Wrapper = styled.div`
  padding: calc(3rem) 0 0;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`;

const createURL = (state) => {
  const { query, refinementList } = state;
  //
  // const isDefaultRoute =
  //   !query &&
  //   (refinementList && refinementList.category && refinementList.category.length === 0) &&
  //   (refinementList && refinementList.tags && refinementList.tags.length === 0);
  //
  // if(isDefaultRoute){
  //   return false
  // }

  const queryParameters = {};

  if (query) {
    queryParameters.query = query;
  }

  if (refinementList && refinementList.category) {
    queryParameters.category = state.refinementList.category.map(
      encodeURIComponent
    );
  }

  if (refinementList && refinementList.tags) {
    queryParameters.tags = state.refinementList.tags.map(encodeURIComponent);
  }

  const queryString = qs.stringify(queryParameters, {
    addQeuryPrefix: true,
    arrayFormat: "repeat",
  });

  return `/shop/?${queryString}`;
};

const searchStateToUrl = (searchState) =>
  searchState ? createURL(searchState) : "gggg";

const urlToSearchState = (location) => {
  const { query, page = 1, category = [], tags = [] } = qs.parse(
    location.search.slice(1)
  );
  const allCategory = Array.isArray(category)
    ? category
    : [category].filter(Boolean);
  const allTags = Array.isArray(tags) ? tags : [tags].filter(Boolean);

  const urlState = {
    ...(query ? { query: decodeURIComponent(query) } : {}),
    page,
    refinementList: {
      category: allCategory.map(decodeURIComponent),
      tags: allTags.map(decodeURIComponent),
    },
  };

  return urlState;
};

const Product = ({ hits, location, history }) => {
  const { id, producer } = useParams();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [producers, setProducers] = useState([]);
  const [selectedProducer, setSelectedProducer] = useState(null);
  const [producerName, setProducerName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [searchState, setSearchState] = useState(urlToSearchState(location));
  const [debouncedSetState, setDebouncedSetState] = useState(null);

  const onSearchStateChange = (updatedSearchState) => {
    clearTimeout(debouncedSetState);

    setDebouncedSetState(
      setTimeout(() => {
        history.push(searchStateToUrl(updatedSearchState), updatedSearchState);
      }, DEBOUNCE_TIME)
    );

    setSearchState(updatedSearchState);
  };

  useEffect(() => {
    if (loading) {
      const fetchProduct = async () => {
        const res = await fetchSingleProduct(id);
        setProduct(res);
        const productProducers = await fetchProductProducers(id);
        setProducers(productProducers);

        if (selectedProducer === null) {
          for (const key of Object.keys(productProducers)) {
            if (productProducers.hasOwnProperty(key)) {
              const element = productProducers[key];
              setSelectedProducer(element.uid);
              break;
            }
          }
        }

        let name = producers[selectedProducer]?.name;
        setProducerName(name);

        setLoading(false);
      };

      analytics.logEvent("view_item", { item_id: id });
      fetchProduct();
    }
  }, [loading, id, producer, producers, producerName, selectedProducer]);

  return (
    <InstantSearch
      indexName="products"
      searchClient={searchClient}
      searchState={searchState}
      onSearchStateChange={onSearchStateChange}
      createURL={createURL}
    >
      <Wrapper>
        {isBrowser ? <ShopSidebar product /> : <ShopSidebar product hidden />}
        {product ? (
          <ProductFull
            title={product.title}
            image={product.image}
            description={product.description}
            rating={Number(product.rating)}
            tags={product.tags}
            unit={product.unit}
            price={product.price}
            fee={product.fee}
            keys={Object.keys(producers)}
            producers={producers}
            selectedProducer={selectedProducer}
            producerName={producerName}
            toggleProducer={(value) => {
              setSelectedProducer(value);
              let name = producers[value].name;
              setProducerName(name);
            }}
            uid={id}
            handleModal={setModalOpen}
            loading={loading}
          />
        ) : (
          <>
            {loading ? (
              <> </>
            ) : (
              <h1 style={{ margin: "auto" }}>404 Page not found</h1>
            )}
          </>
        )}
        <LoginModal visible={modalOpen} handleModal={setModalOpen} />
      </Wrapper>
    </InstantSearch>
  );
};

export default Product;
