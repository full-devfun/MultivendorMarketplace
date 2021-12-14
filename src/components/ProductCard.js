import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../utils/devices'
import TagDots from './TagDots'
import { Rate, Icon, Avatar } from 'antd'
import { ReactComponent as Logo } from './leaf.svg';

const Wrapper = styled.div`
  color: ${props => props.theme.secondary};
  margin-bottom: 4rem;
  position: relative;

  @media ${device.laptop} {
    margin: 0;
  }

  h4 {
    font-family: ${props => props.theme.sans};
    font-size: 15px;
    font-weight: 400;
    margin: 1rem 0 0;
    text-align: center;

    @media ${device.laptop} {
      text-align: left;
    }
  }

  p {
    font-family: ${props => props.theme.body};
    font-size: 18px;
    line-height: 1.4em;
    text-align: center;
    margin-bottom: 0;

    @media ${device.laptop} {
      text-align: left;
    }
  }

  span {
    opacity: 0.5;
  }

  a {
    color: ${props => props.theme.secondary};
    text-decoration: none;
    margin-top: 1rem;
    display: inline-block;

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

const Producer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  position: absolute;
  bottom: 38px;
  border-radius: 4px;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0.5rem 1rem;
  background: linear-gradient(0deg, rgba(54,33,62,1) 0%, rgba(0,212,255,0) 100%);
  pointer-events: none;

  .ant-avatar {
    margin-right: 1rem;
  }

  span {
    color: white;
    opacity: 1;
  }
`;

const ProductCard = ({ children, image, thumbnail, title, actionText, url, tags, description, price, unit, rating, showRating, singleProducer, avatar, name, sellers }) => {

  // const thumb = image.replace('.jpg', '-min.jpg');

  return (
    <Wrapper>
      <Image>
        <Link to={url}>
          <img src={thumbnail || image} alt={title} />
        </Link>
      </Image>
      {tags && tags.length > 0 && <TagDots tags={tags} />}
      {avatar && (
        <Producer>
          <Avatar src={avatar} />
          <span>{name}</span>
        </Producer>
      )}
      <h4>{title}</h4>
      {actionText ? <Link to={url}>{actionText} &nbsp;&rarr;</Link> : null}
      {showRating && (
        <>
          <br />
          <Rate character={<Icon component={Logo} />} disabled value={rating} />
        </>
      )}
      {sellers && <span>From {sellers.length} sellers</span>}
    </Wrapper>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.number,
  description: PropTypes.string,
  tags: PropTypes.array
}

export default ProductCard;
