import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, Card, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card;

const Wrapper = styled.div`
  font-family: ${props => props.theme.sans};

  span {
    display: flex;
    justify-content: center;
  }

  .avatar {
    background: ${props => props.theme.secondary};
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 800;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px;
  grid-gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0,0,0,0.12);
`;

const Product = styled.div`
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProducerCard = ({ user, name, photo, id, bio, products, followers, handleFollow }) => {

  const [following, setFollowStatus] = useState(false)

  const handleClick = () => {
    setFollowStatus(true)
    handleFollow(id)
  }

  if(!following && followers && followers.indexOf(user) > -1){
    setFollowStatus(true)
  }

  if (name) {
    return (
      <Wrapper>
        <Card
          actions={[
            <Icon
              type="heart"
              theme={following ? "filled" : "outlined"}
              size="large"
              onClick={() => handleClick()}
            />,
          ]}
        >
          <Link to={`/producer/${id}`}>
            <Meta
              avatar={
                photo ? (
                  <Avatar
                    shape="square"
                    className="avatar"
                    size="large"
                    src={photo}
                  />
                ) : (
                  <Avatar shape="square" className="avatar" size="large">
                    {name ? name.charAt(0) : "A"}
                  </Avatar>
                )
              }
              title={name}
              description={bio}
            />
          </Link>

          {products.length > 0 && (
            <>
              <Grid>
                {products.slice(0, 4).map((product, index) => {
                  const { image, description } = product;
                  const uid = product.id;

                  return (
                    <Product key={index}>
                      <Link to={`/product/${uid}`}>
                        <img src={image} alt={description} />
                      </Link>
                    </Product>
                  );
                })}
              </Grid>
              <br />
              {products.length > 4 && (
                <p>+ {products.length - 4} more products</p>
              )}
            </>
          )}
        </Card>
      </Wrapper>
    );
  } else {
    return null;
  }
}

export default ProducerCard;
