import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Product = props => {
  const { product } = props;
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.imageUrl} />
      <p>{product.description}</p>
      <Link className="btn btn-secondary" to={`/products/${product.id}/review`}>
        Write a customer review
      </Link>
    </div>
  );
};

export default Product;
