import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from './Product'
import DeleteProduct from './DeleteProduct'

const SingleProduct = props => {
  const { currentUser, currentProduct } = props
  return (
    <div className="container">
      <Product product={currentProduct} />
      {currentUser.admin && <Link to="/products/1/edit">Edit</Link>}
      {currentUser.admin && <DeleteProduct />}
    </div>
  )
}

const mapState = state => {
  return {
    currentUser: state.user,
    currentProduct: state.product.currentProduct,
  }
}

export default connect(mapState)(SingleProduct)
