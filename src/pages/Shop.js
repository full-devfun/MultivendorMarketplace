import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ProductList from "../components/ProductList";
import ShopSidebar from "../components/ShopSidebar";
import { withRouter } from "react-router-dom";
import { device } from "../utils/devices";
import Footer from "../components/Footer";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import qs from "qs";

const DEBOUNCE_TIME = 700;
const searchClient = algoliasearch(
  "VLXSKNYQRF",
  "88d8816875da387bcb87952abcdc719f"
);

const Wrapper = styled.div`
  padding-top: calc(2rem + 33px);

  .footer {
    grid-column: span 2;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: calc(1rem + 50px) 0 0;
  }

  .ais-CurrentRefinements {
    grid-column: span 4;

    .ais-CurrentRefinements-list {
      list-style: none;
    }

    .ais-CurrentRefinements-item {
      display: flex;
      margin-bottom: 1rem;

      span {
        background: ${(props) => props.theme.bg};
        margin-right: 1rem;
        color: ${(props) => props.theme.secondary};
        padding: 0.5rem;
      }
    }
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

const Shop = ({ location, history, hits }) => {
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
    setSearchState(urlToSearchState(location));
  }, [location]);

  return (
    <InstantSearch
      indexName="products"
      searchClient={searchClient}
      searchState={searchState}
      onSearchStateChange={onSearchStateChange}
      createURL={createURL}
    >
      <Wrapper>
        <ShopSidebar />
        <ProductList />
      </Wrapper>
      <Footer />
    </InstantSearch>
  );
};

Shop.propTypes = {
  products: PropTypes.object,
};

export default withRouter(Shop);
