import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changeInputAction, getProductAction } from '../../store/product';

const FormInput = (props) => {
  // replace inline values with props
  return (
    <div className="form-group">
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={currentProduct.name}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  )
}

import history from '../../history'

export class ProductForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.handleProduct()
  }

  handleProduct = async (event) => {
    const productId = this.props.currentProduct.id;
    await this.props.handleProduct(this.props.currentProduct, productId);
    history.push(`/products/${this.props.currentProduct.id}`)
  };

  componentWillUnmount() {
    // set updated or new to false on currentProduct
    const { currentProduct, resetCurrentProduct } = this.props;
    resetCurrentProduct({ ...currentProduct, new: false, updated: false });
  }

  render() {
    const { existingCategories, currentProduct, handleChange } = this.props;
    // REVIEW: redirect after awaiting handleSubmit
    if (currentProduct.new || currentProduct.updated) {
      return <Redirect to={`/products/${currentProduct.id}`} />;
    }
    return (
      <div className="container">
        <form onSubmit={event => this.handleSubmit(event, currentProduct)}>
          {/* REVIEW: Good place for a higehr-order component? */}
          {/* Maybe good to do before moving on to the next forms. */}
          <FormInput
            type="text"
            name="name"
            value={currentProduct.name}
            onChange={handleChange}
            label="Product Name"
          />

          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={currentProduct.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              value={currentProduct.price}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={currentProduct.description}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/*<label htmlFor="new-categories">New Categories</label>
        <input
          type="text"
          name="new-categories"
          id="new-categories"
          placeholder="Separate with a comma"
          value={currentProduct.categories}
    />*/}
          <div className="form-group">
            <label htmlFor="inventory">Units in Stock</label>
            <input
              type="text"
              name="inventory"
              id="inventory"
              value={currentProduct.inventory}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image Url</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={currentProduct.imageUrl}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/*<select onChange={() => console.log('select changed')}>
          {existingCategories.map(category => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            )
          })}
        </select>*/}

          <button className="btn btn-primary" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    currentProduct: state.product.currentProduct,
  };
};
const mapDispatch = dispatch => {
  return {
    handleChange: event => {
      dispatch(changeInputAction(event.target.name, event.target.value));
    },
    resetCurrentProduct: currentProduct => {
      dispatch(getProductAction(currentProduct));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(ProductForm);
