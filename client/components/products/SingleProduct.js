import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from './Product'
import DeleteProduct from './DeleteProduct'

const SingleProduct = props => {
  const { currentUser, currentProduct } = props
  return (
    <div className="container">
      <Product key={currentProduct.id} product={currentProduct} />
      {currentUser.admin && (
        <div className="admin-product-options">
          <Link className="btn btn-primary" to="/products/new">
            New Product
          </Link>
          <Link className="btn btn-success" to="/products/1/edit">
            Edit
          </Link>
          <DeleteProduct />
        </div>
      )}
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
