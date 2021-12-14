import React, { useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../Firebase'
import firebase from 'firebase/app'
import useFetchProducers from '../hooks/useFetchProducers'
import ProducerCard from '../components/ProducerCard'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  width: 90vw;
  margin: 10rem auto;
  color: ${props => props.theme.secondary};
  font-family: ${props => props.theme.body};
  font-size: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const Producers = () => {

  const user = useSelector(state => state.user)
  const [producers, fetchProducers, loading] = useFetchProducers();

  useEffect(() => {
    if(loading){
      fetchProducers()
    }
  })

  const handleFollow = (producer) => {
    db.collection('producers').doc(producer).set({
      followers: firebase.firestore.FieldValue.arrayUnion(user.uid)
    }, { merge: true })
  }

  return (
    <Wrapper>
      <h2>Producers</h2>
      <Grid>
      {producers.map(producer => {
        const { displayName, photoURL, uid, bio, products, followers } = producer;
        return (
          <>
            {products.length > 0 && (
              <ProducerCard
                key={uid}
                name={displayName}
                photo={photoURL}
                products={products}
                id={uid}
                user={user.uid}
                followers={followers}
                handleFollow={handleFollow}
                bio={bio}
              />
            )}
          </>
        );
        
      })}
      </Grid>
    </Wrapper>
  )
}
export default Producers;
