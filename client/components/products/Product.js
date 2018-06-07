import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ quantity: event.target.value });
  }

  handleSubmit(event) {
    
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <h3>{product.name}</h3>
        <img src={product.imageUrl} />
        <div>
          <form>
            <label>
              Quantity:
              <input type="number" min="1" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add to cart" />
          </form>
        </div>
        <p>{product.description}</p>
        <Link className="btn btn-secondary" to={`/products/${product.id}/review`}>
          Write a customer review
        </Link>
      </div>
    );
  };

}

export default Product;
