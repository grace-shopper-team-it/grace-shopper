import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = props => (
  <div className="row">
    {props.products.map(product => {
      return (
        <div
          className="col-md-4"
          key={product.id}
          style={{ paddingBottom: '15px' }}
        >
          <div className="card" key={product.id}>
            <div
              className="wrapper"
              style={{
                overflow: 'hidden',
                width: '100%',
                height: '300px',
              }}
            >
              <img
                className="card-img img-responsive"
                src={product.imageUrl}
                alt="Card image"
              />
            </div>
            <div className="cardcontainer">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">
                {product.description.length < 50
                  ? product.description
                  : product.description.slice(0, 50) + '...'}{' '}
              </p>
              <p>{`Price: ${product.price}`} </p>
              <p>{`In Stock: ${product.inventory}`}</p>
              <Link to={'/products/' + product.id} className="btn btn-primary">
                Details
              </Link>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default ProductsCard;
