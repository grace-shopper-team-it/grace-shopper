import React from 'react';

const ReviewCard = props => (
  <div>
    {props.reviews.map(review => {
      return <p key={review.id}>{review.content}</p>;
    })}
  </div>
);

export default ReviewCard;
