import React from 'react'
import styled from 'styled-components'
import { connectInfiniteHits, CurrentRefinements } from 'react-instantsearch-dom'
import ProductCard from '../components/ProductCard'
import { device } from "../utils/devices";
import { Waypoint } from 'react-waypoint'

const Wrapper = styled.div`
  margin: 2.5vw;

  ul {
    padding: 0;
    margin: 0;
  }

  .ais-RefinementList-labelText {
  text-transform: capitalize;
  padding-left: 0.5rem;
  }

  .ais-RefinementList-count {
  display: none;
  }
`;

const List = styled.div`
  margin-top: 2.5vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5vw;

  @media ${device.laptop} {
    margin-top: 2.5vw;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 2.5vw;
  }
`;

const ProductList = ({ hits, refineNext }) => (
  <Wrapper>
    <CurrentRefinements />
    <List>
      {hits && hits.map(product => {
        if(product.producers && product.producers.length > 0){
          if (
            product.id === "QukVARCK9BmijcTWdazh" ||
            product.id === "WcGSZmTOKB"
          ) {
            return null;
          } else {
            return (
              <ProductCard
                key={product.objectID}
                title={product.title}
                image={product.thumbnail || product.image}
                url={`/product/${product.objectID}`}
                tags={product.tags}
                id={product.objectID}
                unit={product.unit}
                price={product.price}
                sellers={product.producers}
              />
            );
          }
        } else {
          return false
        }
      })}
    </List>
    <Waypoint onEnter={refineNext} />
  </Wrapper>
);

export default connectInfiniteHits(ProductList)
