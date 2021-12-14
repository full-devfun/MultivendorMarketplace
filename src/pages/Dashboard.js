import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import OurPicks from "../components/Dashboard/OurPicks";
import NewProducts from "../components/Dashboard/NewProducts";
import BuyAgain from "../components/Dashboard/BuyAgain";
import useTransactions from "../hooks/useTransactions";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";
import Section from "../components/Section";
import Card from "../components/Card";
import Checkmark from "../components/Checkmark";
import { device } from "../utils/devices";
import lemonsSmall from "../images/lemons_small.jpg";
import lemonsMedium from "../images/lemons_medium.jpg";
import lemons from "../images/lemons.jpg";
import soilSmall from "../images/soil_small.jpg";
import soilMedium from "../images/soil_medium.jpg";
import soil from "../images/soil.jpg";

const Wrapper = styled.div`
  margin: 4rem auto 4rem;

  h2 {
    font-family: ${(props) => props.theme.body};
    font-weight: 400;
    font-size: 36px;
    width: 90vw;
    margin: 0 auto;
  }

  section {
    padding-bottom: 0 !important;
  }
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

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const { transactions } = useTransactions(user.uid);

  return (
    <div>
      <Hero
        title={"Eat Local, Fresh, and Responsible."}
        buttonText={"Explore our market"}
        link={"/shop"}
      />
      <Wrapper>
        <h2>
          Welcome back, {user.displayName && user.displayName.split(" ")[0]}
        </h2>
        {user.following && user.following.length > 0 && (
          <OurPicks title="Our Picks for You" />
        )}
        {transactions.length > 0 && <BuyAgain title="Buy It Again" />}
        <NewProducts title="Newly Added Products" />
      </Wrapper>
      <Section columns={2} bg={(props) => props.theme.primary}>
        <TextBlock>
          <h1>Local Guru</h1>
          <p>
            Local Guru offers all the best in goods from local farms and
            producers. We partner directly with the source to offer you a
            curated, carefully sourced selection of produce and grab-and-go
            options. Our mission is to make locally grown food easily accessible
            for our community to enjoy. We believe in the power of healthy
            eating. Food grown without harsh chemicals is best for our bodies
            and the environment. We source food grown close to home, cutting
            down travel time and limiting exposure to toxins for guaranteed
            fresher food.
          </p>
        </TextBlock>
        <TextBlock>
          <h1>Our Mission</h1>
          <ul>
            <li>
              <Checkmark size={36} />{" "}
              <p>
                Foster a network of thriving Local Farms, Urban Farms, and
                Community Gardens
              </p>
            </li>
            <li>
              <Checkmark size={36} />{" "}
              <p>Provide access to healthy, fresh food to our community</p>
            </li>
            <li>
              <Checkmark size={36} />{" "}
              <p>Support sustainable growing practices</p>
            </li>
            <li>
              <Checkmark size={36} />{" "}
              <p>Build new local economies and strengthen food ecosystems</p>
            </li>
          </ul>
        </TextBlock>
        <Card
          title="We Curate, You Customize"
          image={[lemonsSmall, lemonsMedium, lemons]}
          // actionText="Learn More"
          // url="/about"
        >
          <p>
            As a subscriber, you are able to add or remove whatever items that
            you want to your basket - as long as your minimum order is $20. Your
            basket is delivered bi-weekly by default, but you can make it weekly
            or suspend it as needed with one click in your account settings. You
            can cancel at any time.
          </p>
        </Card>
        <Card
          title="You Decide, We Deliver"
          image={[soilSmall, soilMedium, soil]}
          // actionText="Learn More"
          // url="/about"
        >
          <p>
            We deliver directly to you on Saturdays between 10am and 5pm at a
            flat rate of $9.99. Our minimum order is $20.00 and orders over
            $40.00 deliver free!
          </p>
        </Card>
      </Section>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Dashboard;
