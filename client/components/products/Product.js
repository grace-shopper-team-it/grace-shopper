import React from 'react'

const Product = props => {
  const { product } = props
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.imageUrl} />
      <p>{product.description}</p>
    </div>
  )
}

export default Product
