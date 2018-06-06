import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { changeInputAction, getProductAction } from '../../store/product'

export class ProductForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    this.props.handleProduct(this.props.currentProduct, 1)
  }
  componentWillUnmount() {
    // set updated or new to false on currentProduct
    const { currentProduct, resetCurrentProduct } = this.props
    resetCurrentProduct({ ...currentProduct, new: false, updated: false })
  }

  render() {
    const { existingCategories, currentProduct, handleChange } = this.props
    console.log(currentProduct)
    if (currentProduct.new || currentProduct.updated) {
      return <Redirect to="/products/1" />
    }
    return (
      <form onSubmit={event => this.handleSubmit(event, currentProduct)}>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={currentProduct.name}
          onChange={handleChange}
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          value={currentProduct.price}
          onChange={handleChange}
        />

        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={currentProduct.description}
          onChange={handleChange}
        />

        {/*<label htmlFor="new-categories">New Categories</label>
        <input
          type="text"
          name="new-categories"
          id="new-categories"
          placeholder="Separate with a comma"
          value={currentProduct.categories}
    />*/}

        <label htmlFor="stock">Units in Stock</label>
        <input
          type="text"
          name="stock"
          id="stock"
          value={currentProduct.stock}
          onChange={handleChange}
        />

        <label htmlFor="imageUrl">Image Url</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={currentProduct.imageUrl}
          onChange={handleChange}
        />

        {/*<select onChange={() => console.log('select changed')}>
          {existingCategories.map(category => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            )
          })}
        </select>*/}

        <button type="submit">Save Changes</button>
      </form>
    )
  }
}

const mapState = state => {
  return {
    currentProduct: state.product.currentProduct,
  }
}
const mapDispatch = dispatch => {
  return {
    handleChange: event => {
      dispatch(changeInputAction(event.target.name, event.target.value))
    },
    resetCurrentProduct: currentProduct => {
      dispatch(getProductAction(currentProduct))
    },
  }
}

export default connect(
  mapState,
  mapDispatch
)(ProductForm)
