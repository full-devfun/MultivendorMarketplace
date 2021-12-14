import React from 'react';
import styled from 'styled-components';
import Popover from "antd/lib/popover";

  // list-style: none;
  // display: flex;
  // align-items: center;
  // padding: 0;
  // margin: 2rem 0;

let List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 0 0 2rem 0;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled.li`
  padding: 0.5rem;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};
  text-transform: capitalize;
  font-family: ${(props) => props.theme.sans};
  margin: 3px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;

  &:hover {
    transform: translate(0, -2px);
  }
`;

const Dot = styled.span`
  border-radius: 50%;
  background: ${props => props.tag};
  display: block;
  width: .5rem;
  height: .5rem;
  margin-right: .5rem;
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
};

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

const TagDots = ({ tags }) => {
  return (
    <List>
      {tags.map((tag) => (
        <Popover key={tag} placement="top" content={chooseContent(tag)}>
          <Item key={tag}>
            <Dot tag={chooseColor(tag)} /> {tag}
          </Item>
        </Popover>
      ))}
    </List>
  );
};

export default TagDots;
