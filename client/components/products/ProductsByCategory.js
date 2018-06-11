import React, { Component } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';

class ProductsByCategory extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    let category = await axios.get('/api/products/category/' + id);
    this.setState({ products: category.data.products });
  }
  render() {
    return (
      <div>
        <h1>Currently Available</h1>
        <ProductsCard products={this.state.products} />
      </div>
    );
  }
}

export default ProductsByCategory;
