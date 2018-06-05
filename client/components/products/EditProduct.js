import React from 'react'
import { connect } from 'react-redux'
import ProductForm from './ProductForm'
import { getProductThunk } from '../../store/product'

const existingCategories = [
  { id: 1, name: 'Sports' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Heavy Metal' },
  { id: 4, name: 'Jazz' },
  { id: 5, name: 'Weird Stuff' },
]

class EditProduct extends React.Component {
  handleSubmit = event => {
    alert('submitted')
    event.preventDefault()
    // update database
  }
  componentDidMount() {
    this.props.fetchProduct()
  }
  render() {
    return (
      <ProductForm
        existingCategories={existingCategories}
        handleSubmit={this.handleSubmit}
      />
    )
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
