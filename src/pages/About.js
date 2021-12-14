import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import styled from 'styled-components';
import greenbeans from '../images/greenbeans.jpg';
import oranges from '../images/oranges.jpg';
import garlic from '../images/garlic.jpg';
import { device } from '../utils/devices';

const Wrapper = styled.main`
  margin-top: calc(2rem + 33px);
`;

const AboutHero = styled.div`

`;

const Banner = styled.div`
  height: 30vh;
  background: url(${props => props.img});
  background-size: cover;
  margin-bottom: 4rem;

  @media ${device.laptop}{
    height: 50vh;
  }
`;

const Info = styled.div`
  width: 90vw;
  margin: 0 auto;
  color: ${props => props.theme.secondary};

  h1 {
    font-family: ${props => props.theme.headline};
    font-size: 36px;
    margin-bottom: 2rem;

    @media ${device.laptop}{
      text-align: center;
    }
  }

  p {
    font-family: ${props => props.theme.body};
    font-size: 18px;
    line-height: 1.5em;
    margin: 0 auto 1rem;

    @media ${device.laptop}{
      max-width: 50vw;
      text-align: center;
    }
  }
`;

const About = (props) => (
  <Wrapper>
    <AboutHero>
      <Banner img={oranges} />
      <Info>
        <h1>Vision</h1>
        <p>Local Guru connects people looking for good food with the farmers who cultivate it. We believe that food should be consumed where it is grown. This creates a transparent and honest food system that is better for everyone. The global potential to grow food within city limits is massive.</p>
        <p>Purchasing food from people you trust and developing strong local economies is what buying locally is all about. The mission of the local food movement is to create thriving community-based food systems that make high quality food accessible to everyone.</p>
      </Info>
    </AboutHero>
    <Section columns={2}>
      <Card
        title='Source: Food Where People Live'
        image={greenbeans}
        actionText='Learn More'
        url='/about'
      >
        We deliver directly to the consumer. We meet this challenge with a vision: create a better food system through local agriculture in all facets. This means partnering up with local farmers and food makers.
      </Card>
      <Card
        title='Network: Local Farms and Food Makers'
        image={garlic}
        actionText='Learn More'
        url='/about'
      >
        We seek partners who share our values of transparency and sustainability. We work closely with them for our online farmer’s market to offer locals a full selection of products.
      </Card>
    </Section>
    <Section columns={2} bg={props => props.theme.primary}>
      <Card
        title='Relationships'
        image={greenbeans}
        actionText='Learn More'
        url='/about'
      >
        We require all of our producers to allow community visits on a monthly basis. This allows our Producers and Consumers to establish a relationship of trust.  During this community outreach, consumers may test the food in order to develop trust.
      </Card>
      <Card
        title='From the Farm to Your Home'
        image={greenbeans}
        actionText='Learn More'
        url='/about'
      >
        Producers deliver fresh food to us every Saturday. We then same day deliver your items. Our focus is efficiency and convenience. If you prefer to pick up your order, our partner community centers are available after 12pm.
      </Card>
    </Section>
    <Section columns={2}>
      <Card
        title='Build Local Communities'
        image={greenbeans}
        actionText='Learn More'
        url='/about'
      >
      <p>We believe in a culture of community. We want to make sure that local producers have a place to sell food to their neighbors. Your neighbors have something different and inventive to offer you to enjoy that will sustain their family and yours.</p>
      <p>Options are important. This is why we believe in the Small Farms who have been overrun for far too long by the Large Farm.</p>
      </Card>
      <Card
        title='Community: A System'
        image={greenbeans}
        actionText='Learn More'
        url='/about'
      >
        Reinventing a broken food system without the community is unthinkable. We are constantly curious for your feedback on our process and how we can make things more efficient for you.
      </Card>
    </Section>
  </Wrapper>
);

export default About;
