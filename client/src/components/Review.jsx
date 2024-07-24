import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <h4>Rating: {review.rating}</h4>
      <p>{review.text}</p>
      <p>User: {review.user.name}</p>
    </div>
  );
};

export default Review;
