import React from 'react'
import { connect } from 'react-redux'
import ProductForm from './ProductForm'
import { getProductThunk } from '../../store/product'

const existingCategories = [
  'Sports',
  'Music',
  'Heavy Metal',
  'Jazz',
  'Weird Stuff',
]

class EditProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProduct()
  }
  render() {
    return <ProductForm existingCategories={existingCategories} />
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProduct: productId => dispatch(getProductThunk(productId)),
  }
}

export default connect(
  null,
  mapDispatch
)(EditProduct)
