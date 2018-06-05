import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const products = [
  {
    id: 1,
    name: 'clown',
    rating: 3.5,
    description: 'eiugrh fIOWAHGUIRW ofejhguieroils',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41PKN8W5CDL.jpg',
    stock: 5,
    price: 30,
  },
  {
    id: 2,
    name: 'nice clown',
    rating: 3.0,
    description: 'eiugrh fIOWAHGUIRW',
    imageUrl:
      'https://thetoystimeforgot.com/wp-content/uploads/2017/12/RONALD-MCDONALD1.jpg',
    stock: 3,
    price: 20,
  },
  {
    id: 3,
    name: 'nice clown1',
    rating: 2.0,
    description: 'eiugrh fIOWAHGUIRW',
    imageUrl:
      'https://thetoystimeforgot.com/wp-content/uploads/2017/12/RONALD-MCDONALD1.jpg',
    stock: 3.8,
    price: 25,
  },
];

export default class AllProducts extends Component {
  // constructor() {
  //   super();
  //   this.state = { products: products };
  // }
  render() {
    return (
      <div className="allProducts">
        <div className="pageHeader">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <h2 className="title">All Products </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <div className="section">
              <div className="nav nav-bar">
                <div>
                  <h2 className="navbar-header" style={{ textAlign: 'center' }}>
                    Currently Available
                  </h2>
                  <form
                    className="navbar-form navbar-right"
                    role="search"
                    onSubmit={e => e.preventDefault()}
                  >
                    <div className="form-group form-white">
                      <input
                        name="searchProduct"
                        type="text"
                        className="form-control"
                        placeholder="Find your favorite product"
                        onChange={this.handleSearch.bind(this)}
                      />
                    </div>
                    <button type="submit" className="btn btn-white">
                      <i className="material-icons">search</i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="row">
                {products.map(product => {
                  return (
                    <div className="col-md-4" key={product.id}>
                      <div>
                        <div
                          className="card card-background"
                          style={{ background: `url(${product.imageUrl})` }}
                        >
                          <div className="card-content">
                            <Link to={'/products/category' + product.category}>
                              <h6 className="category">{product.category}</h6>
                            </Link>

                            <h3 className="card-title">{product.name}</h3>

                            <p className="card-description">
                              {product.description.length < 50
                                ? product.description
                                : product.description.slice(0, 50) + '...'}
                            </p>
                            <Link
                              className="btn btn-danger btn-round"
                              to={'/products/' + product.id}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
