import React from "react";
import styled from "styled-components";
import heroSmall from "../images/hero_small.jpg";
import heroMed from "../images/hero_medium.jpg";
import heroLarge from "../images/hero.jpg";
import ResponsiveImage from "./ResponsiveImage";
import Button from "./Button";
import { device } from "../utils/devices";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 70vh;
  background-size: cover;
  padding: 4rem 5vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  a {
    z-index: 2;
  }

  h1 {
    font-family: ${props => props.theme.headline};
    font-weight: 400;
    color: white;
    line-height: 1.3em;
    font-size: 48px;
    margin-bottom: 1rem;
    z-index: 2;

    @media ${device.laptop} {
      font-size: 6vw;
    }
  }
`;

const Hero = ({ buttonText, title, image, link }) => (
  <Wrapper>
    <h1>{title}</h1>
    <picture>
      <ResponsiveImage
        small={heroSmall}
        medium={heroMed}
        large={heroLarge}
        alt="Eat Local, Fresh, and Responsible"
      />
    </picture>
    <Link to={link || `/login`}>
      <Button>{buttonText}</Button>
    </Link>
  </Wrapper>
);

export default Hero;
