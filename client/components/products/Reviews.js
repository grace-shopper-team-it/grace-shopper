import React from 'react';
import './Reviews.css';
import ReviewCard from './ReviewCard';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let reviews = this.props.reviews;
    let average;

    if (!reviews.length) {
      average = 0;
    } else {
      average =
        reviews.reduce((total, score) => total + +score.stars, 0) /
        reviews.length;
      average = Math.round(average * 10) / 10;
      average = average * 20 + 10;
    }
    return (
      <div>
        <div className="container" style={{ display: 'flex' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Reviews</h1>
          <div className="star-ratings-css">
            <div
              className="star-ratings-css-top"
              style={{ width: average + '%' }}
            >
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
        <ReviewCard reviews={reviews} />
      </div>
    );
  }
}

export default Reviews;
