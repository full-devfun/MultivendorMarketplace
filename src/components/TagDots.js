import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'
import Popover from 'antd/lib/popover'

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;

  @media ${device.laptop}{
    justify-content: flex-start;
  }
`;

const Dot = styled.li`
  border-radius: 50%;
  background: ${props => props.tag};
  display: block;
  width: .5rem;
  height: .5rem;
  margin-right: .25rem;
`;

const chooseColor = (tag) => {
  switch (tag) {
    case "vegan":
      return "rgb(111,194,15)";
    case "vegetarian":
      return "rgb(80,142,9)";
    case "gluten-free":
      return "rgb(245,166,35)";
    case "celiacs-safe":
      return "rgb(34,245,166)";
    case "nut-free":
      return "rgb(211, 145, 0)";
    case "nut-allergen-free":
      return "rgb(0, 211, 145)";
    default:
      return;
  }
}

const chooseContent = (tag) => {
  switch (tag) {
    case "vegan":
      return "No animal products";
    case "vegetarian":
      return "No meat products or gelatin";
    case "gluten-free":
      return "Contains no gluten";
    case "celiacs-safe":
      return "Not produced with or around products containing gluten";
    case "nut-free":
      return "Contains no nuts";
    case "nut-allergen-free":
      return "Not produced with or around products containing nuts";
    default:
      return;
  }
};

const TagDots = ({ tags }) => (
  <List>
    {tags.map((tag) => (
      <Popover title={tag} key={tag} content={chooseContent(tag)}>
        <Dot tag={chooseColor(tag)} />
      </Popover>
    ))}
  </List>
);

export default TagDots;
