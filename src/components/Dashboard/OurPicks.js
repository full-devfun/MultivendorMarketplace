import React from 'react'
import { useSelector } from 'react-redux'
import usePicks from '../../hooks/usePicks'
import ProductCard from '../ProductCard'
import Section from '../Section'

const OurPicks = ({ title }) => {

  const { following } = useSelector(state => state.user)

  const { products } = usePicks(following)

  return (
    <Section title={title} leftTitle columns={6}>
      {products.slice(0,6).map(product => {
        const { title, description, image, thumbnail, uid, photo, name } = product;
        return (
          <ProductCard
            id={product.product}
            title={title}
            description={description}
            image={thumbnail || image}
            avatar={photo}
            name={name}
            url={`/product/${uid}`}
          />
        )
      })}
    </Section>
  )
}

export default OurPicks;
