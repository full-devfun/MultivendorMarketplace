import React from 'react'
import styled from 'styled-components'
import Rate from "antd/lib/rate";
import Avatar from "antd/lib/avatar";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './leaf.svg';


const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  list-style: none;
  padding: 0;
`;

const Item = styled.div`
  border-radius: 4px;
  border: 1px solid ${props => props.selected ? props.theme.primary : props.theme.border};
  text-transform: capitalize;
  overflow: hidden;
  font-family: ${props => props.theme.sans};
  transition: all 0.2s ease-in-out;
  background: ${props => props.selected ? props.theme.primary : 'transparent'};
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  height: 60px;
  line-height: 16px;
  padding: 0 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  &:hover {
    transform: translate(0,-2px);
  }
`;

const Desc = styled.div`
  color: ${props => props.theme.secondary};
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.border};

  a {
    color: ${props => props.theme.secondary};
  }

  h4 {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.sans};
  }
`;

const ProductProducerSelect = ({ selectedOption, options, toggleProducer, keys }) => {

  return (
    <Wrapper>
      <List>
        {keys && keys.map((option) => {
          const { photo, name } = options[option];
          return (
            <Item
              key={option}
              selected={selectedOption === option}
              onClick={() => toggleProducer(option)}
            >
              {photo ? (
                <Avatar size="large" shape="square" src={photo} />
              ) : (
                <Avatar size="large" shape="square">
                  {name.charAt(0)}
                </Avatar>
              )}
              {name}
            </Item>
          );
        })}
      </List>
      <Desc>
        <h4>
          <Link to={`/producer/${selectedOption}`}>
            {options[selectedOption].name}
          </Link>
        </h4>
        <p>{options[selectedOption].description}</p>
        <Rate
          character={<Logo />}
          allowHalf
          disabled
          value={(options[selectedOption].ratingTotal/options[selectedOption].ratingCount) || 0}
        />
      </Desc>
    </Wrapper>
  );
}

export default ProductProducerSelect;
