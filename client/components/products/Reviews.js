import React from 'react';
import './Reviews.css';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container" style={{ display: 'flex' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Reviews</h1>
        <div className="star-ratings-css">
          <div className="star-ratings-css-top" style={{ width: '55%' }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className="star-ratings-css-bottom">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
