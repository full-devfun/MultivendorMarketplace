import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../utils/devices";
import ProductInfo from "./ProductInfo";
import ProductRatings from "./ProductRatings";
import { Skeleton } from "antd";


const Wrapper = styled.div`
  padding: 5vw;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    grid-gap: 5vw;
  }

  .ant-switch-checked {
    background: ${props => props.theme.secondary};
  }
`;

const Image = styled.picture`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 4px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }
`;

const ProductFull = ({
  toggleProducer,
  selectedProducer,
  producers,
  title,
  description,
  price,
  unit,
  rating,
  tags,
  image,
  uid,
  bulk,
  fee,
  toggleBulk,
  handleModal,
  producerName,
  keys,
  loading
}) => {

  return (
    <Wrapper>
      <Image>
        <img src={image} alt={title} />
      </Image>
      {keys && keys.length > 0 ? (
        <>
          {selectedProducer ? (
            <ProductInfo
              title={title}
              description={description}
              rating={rating}
              tags={tags}
              price={price}
              unit={unit}
              uid={uid}
              fee={fee}
              producers={producers}
              keys={keys}
              selectedProducer={selectedProducer}
              producerName={producerName}
              image={image}
              toggleBulk={toggleBulk}
              toggleProducer={toggleProducer}
              bulk={bulk}
              handleModal={handleModal}
            />
          ) : (
            <Skeleton active paragraph={{ rows: 6 }} />
          )}
        </>
      ) : (
        <>{loading || <h3>No Active Sellers</h3>}</>
      )}
      {keys && keys.length > 0 && selectedProducer && (
        <ProductRatings product={uid} producer={selectedProducer} />
      )}
    </Wrapper>
  );
};

ProductFull.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  tags: PropTypes.array,
  image: PropTypes.string.isRequired
};

export default ProductFull;
