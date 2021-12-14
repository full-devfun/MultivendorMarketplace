import { useState, useEffect } from 'react'
import { db } from '../Firebase'

const useFetchFollowing = (following) => {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [producers, setProducers] = useState([])

  useEffect(
    () => {
    let subscribed = true

    let producerList = []

    following.map( async producer => {
      try {
        const doc = await db.collection('producers').doc(producer).get()
        if(subscribed){
          producerList = [...producerList, doc.data()]
          setProducers(producerList)
          setLoading(false)
        }
      } catch(err) {
        setError(err)
      }
    })

    return () => (subscribed = false);
  }, [following])

  return {
    error,
    loading,
    producers
  }
}

export default useFetchFollowing
