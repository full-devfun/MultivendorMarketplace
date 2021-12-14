import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
// import FeaturedProducts from "../components/FeaturedProducts";
import styled from "styled-components";
import Checkmark from "../components/Checkmark";
import { device } from "../utils/devices";
import Footer from "../components/Footer";
import { db } from "../Firebase";

const Wrapper = styled.main`
  margin-top: calc(2rem + 33px);
`;

const TextBlock = styled.div`
  color: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.body};
  line-height: 1.6em;
  font-size: 16px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  @media ${device.laptop} {
    font-size: 20px;
    line-height: 1.8em;
    margin: 0;
  }

  ul {
    line-height: 3em;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      p {
        margin: 0;
        line-height: 1.6em;
      }

      span {
        flex-shrink: 0;
        margin-right: 1rem;
      }
    }
  }
`;

const Home = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await db.collection(`pages`).doc("home").get();
      setData(res.data());
      setLoaded(true);
    };

    if (!loaded) {
      fetchData();
    }
  }, [loaded]);

  const { heroCTAtext, heroText, blocks } = data;

  const renderBlock = (block) => {
    const { image, heading, body, items } = block;

    switch (block.type) {
      case "imageText":
        return (
          <Card
            title={heading}
            image={[image]}
            // actionText="Learn More"
            // url="/about"
          >
            <p>{body}</p>
          </Card>
        );
      case "list":
        return (
          <TextBlock>
            <h1>{heading}</h1>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <Checkmark size={36} /> <p>{item}</p>
                </li>
              ))}
            </ul>
          </TextBlock>
        );
      default:
        return (
          <TextBlock>
            <h1>{heading}</h1>
            <p>{body}</p>
          </TextBlock>
        );
    }
  };

  const isOdd = (x) => {
    return x & 1;
  };

  return (
    <Wrapper>
      {loaded && (
        <>
          <Hero title={heroText} buttonText={heroCTAtext} />
          {blocks.length > 0 &&
            blocks.map((block, index) => {
              const { left, right } = block;

              return (
                <Section
                  columns={2}
                  bg={!isOdd(index) && ((props) => props.theme.primary)}
                  key={index}
                >
                  {renderBlock(left)}
                  {renderBlock(right)}
                </Section>
              );
            })}
          <Subscribe />
          {/* <FeaturedProducts /> */}
          <Footer />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
