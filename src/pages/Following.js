import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import useFetchFollowing from '../hooks/useFetchFollowing'
import styled from 'styled-components'
import { List, Avatar } from 'antd'
import { db } from '../Firebase'
import { Link } from 'react-router-dom'
import { firebase } from '@firebase/app'
import Button from '../components/Button'

const { Item } = List;

const Wrapper = styled.div`
  width: 90vw;
  max-width: 900px;
  margin: 10rem auto 4rem;
`;

const Following = () => {
  let user = useSelector((state) => state.user);
  let { following } = user;
  const dispatch = useDispatch();

  const { loading, producers } = useFetchFollowing(following);

  const unFollow = (uid) => {
      return db
        .collection("users")
        .doc(user.uid)
        .update({
          following: firebase.firestore.FieldValue.arrayRemove(uid),
        })
        .then(() => {
          return db
            .collection("producers")
            .doc(uid)
            .update({
              followers: firebase.firestore.FieldValue.arrayRemove(user.uid),
            });
        })
        .then(() => {
          return db.collection("users").doc(user.uid).get();
        })
        .then((doc) => {
          user = doc.data()
          following = user.following
          dispatch({ type: "login_user", payload: doc.data() });
        });
    };

  return (
    <Wrapper>
      <h2>Following {following && <span>({following.length})</span>}</h2>
      {(!loading && following.length > 0) && (
        <List
          bordered
          dataSource={producers}
          renderItem={(item) => (
            <Item
              key={item.uid}
              actions={[
                <Button onClick={() => unFollow(item.uid)}>Unfollow</Button>,
              ]}
            >
              <Item.Meta
                avatar={<Avatar src={item.photoURL} />}
                title={
                  <Link to={`/producer/${item.uid}`}>{item.displayName}</Link>
                }
                description={item.bio}
              />
            </Item>
          )}
        />
      )}
    </Wrapper>
  );
}

export default Following;
