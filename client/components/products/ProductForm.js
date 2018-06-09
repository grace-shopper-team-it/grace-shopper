import React from 'react';
import { connect } from 'react-redux';
import { changeInputAction, getProductAction } from '../../store/product';
import history from '../../history';

export class ProductForm extends React.Component {
  componentDidMount() {
    if (
      !this.props.currentUser ||
      (this.props.currentUser && !this.props.currentUser.isAdmin)
    ) {
      history.push('/allProducts');
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.handleData();
  };
  handleData = async () => {
    const productId = this.props.currentProduct.id;
    await this.props.handleProduct(this.props.currentProduct, productId);
    history.push(`/products/${this.props.currentProduct.id}`);
  };
  handleChange = event => {
    this.props.handleInput(event.target.name, event.target.value);
  };

  render() {
    const { currentProduct } = this.props;
    const { handleChange } = this;
    return (
      <div className="container">
        <form onSubmit={event => this.handleSubmit(event, currentProduct)}>
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

          <div className="form-group">
            <label htmlFor="categories">New Categories</label>
            <input
              type="text"
              name="categories"
              id="categories"
              placeholder="Separate with a comma"
              className="form-control"
              onChange={handleChange}
              value={currentProduct.categories}
            />
          </div>

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
    currentUser: state.user,
  };
};
const mapDispatch = dispatch => {
  return {
    handleInput: (name, value) => {
      dispatch(changeInputAction(name, value));
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
