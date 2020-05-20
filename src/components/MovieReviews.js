// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ reviews }) => {
  const renderReviews = () => {
    return reviews.map((review) => (
      <ul key={review.display_title} className="review">
        <li>
          <h3>{review.display_title}</h3>
          <p>Rating: {review.mpaa_rating}</p>
          <p>Summary: {review.summary_short}</p>
          <a href={review.link.url}>{review.link.url}</a>
          <br />
        </li>
      </ul>
    ));
  };

  return <div className="review-list">{renderReviews()}</div>;
};

export default MovieReviews;
