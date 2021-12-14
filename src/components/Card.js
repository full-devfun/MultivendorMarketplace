import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../utils/devices";
import ResponsiveImage from "./ResponsiveImage";

const Wrapper = styled.div`
  color: ${props => props.theme.secondary};
  margin-bottom: 4rem;

  @media ${device.laptop} {
    margin: 0;
  }

  h2 {
    font-family: ${props => props.theme.headline};
    font-size: 36px;
    font-weight: 400;
  }

  p {
    font-family: ${props => props.theme.body};
    font-size: 18px;
    line-height: 1.4em;
  }

  a {
    color: ${props => props.theme.secondary};
    text-decoration: none;
    margin-top: 1rem;
    display: inline-block;
    font-size: 18px;

    @media ${device.laptop} {
      font-size: 16px;
    }

    &:hover {
      color: ${props => props.theme.highlight};
    }
  }
`;

const Image = styled.picture`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 2rem;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = ({ children, image, title, actionText, url }) => (
  <Wrapper>
    <Image>
      <Link to={url}>
        {image.length > 1 ? (
          <ResponsiveImage
            small={image[0]}
            medium={image[1]}
            large={image[2]}
            alt={title}
          />
        ) : (
          <img src={image[0]} alt={title} />
        )}
      </Link>
    </Image>
    <h2>{title}</h2>
    {children}
    {actionText ? <Link to={url}>{actionText} &nbsp;&rarr;</Link> : null}
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  actionText: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default Card;
