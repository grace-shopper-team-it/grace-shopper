import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = props => (
  <div className="row">
    {props.products.map(product => {
      return (
        <div className="col-md-4" key={product.id}>
          <div>
            <div
              className="card"
              style={{ background: `url(${product.imageUrl})` }}
            >
              <div className="card-content" style={{ minHeight: '280px' }}>
                <Link to={'/products/' + product.id}>
                  <h3 className="card-title">{product.name}</h3>
                </Link>

                <p className="card-description">
                  {product.description.length < 50
                    ? product.description
                    : product.description.slice(0, 50) + '...'}
                </p>
                <p>{`In Stock: ${product.inventory}`}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default ProductsCard;
