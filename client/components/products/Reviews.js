import React from 'react';
import './Reviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.reviews);
    let reviews = this.props.reviews;
    let average =
      reviews.reduce((total, score) => total + score.stars, 0) / reviews.length;
    average = Math.round(average * 10) / 10;
    console.log(average);
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
