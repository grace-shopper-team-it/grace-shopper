import React from 'react'
import { connect } from 'react-redux'
import { changeInputAction } from '../store/product'

export const ProductForm = props => {
  const { existingCategories, currentProduct, handleChange } = props
  console.log(currentProduct)
  return (
    <form onChange={handleChange}>
      <label htmlFor="name">Product Name</label>
      <input type="text" name="name" id="name" value={currentProduct.name} />

      <label htmlFor="price">Price</label>
      <input type="text" name="price" id="price" value={currentProduct.price} />

      <label htmlFor="description">Product Description</label>
      <input
        type="text"
        name="description"
        id="description"
        value={currentProduct.description}
      />

      <label htmlFor="new-categories">New Categories</label>
      <input
        type="text"
        name="new-categories"
        id="new-categories"
        placeholder="Separate with a comma"
      />

      <label htmlFor="stock">Units in Stock</label>
      <input type="text" name="stock" id="stock" value={currentProduct.stock} />

      <label htmlFor="imageUrl">Image Url</label>
      <input
        type="text"
        name="imageUrl"
        id="imageUrl"
        value={currentProduct.imageUrl}
      />

      <select>
        {existingCategories.map(category => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          )
        })}
      </select>

      <button type="submit">Save Changes</button>
    </form>
  )
}

const mapState = state => {
  return {
    currentProduct: state.products.currentProduct,
  }
}
const mapDispatch = dispatch => {
  return {
    handleChange: event => {
      dispatch(changeInputAction(event.target.name, event.target.value))
    },
  }
}

export default connect(
  mapState,
  mapDispatch
)(ProductForm)
