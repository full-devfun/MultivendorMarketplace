import { useState, useEffect } from 'react'
import { db } from '../Firebase'

const useOrder = (uid) => {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])

  useEffect(
    () => {
      const unsubscribe = db
        .collection('users')
        .doc(uid)
        .collection('orders')
        .onSnapshot( snapshot => {
            const items = []
            snapshot.forEach(doc => { items.push(doc.data()) })
            setLoading(false)
            setOrder(items)
        }, err => { setError(err) } )

      return () => unsubscribe()
    },
    [uid]
  )

  return {
    error,
    loading,
    order,
  }
}

export default useOrder
