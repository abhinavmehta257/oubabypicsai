import React from "react";

function Review({ name, userImage, reviewImage, date, review }) {
  return (
    <div className="review">
      <div className="user-section">
        <img src={userImage} alt="" />
        <h3>{name}</h3>
      </div>
      <div className="rating">
        <div className="stars">
          <img src="./assets/icons/star-yello.svg" alt="" className="star" />
          <img src="./assets/icons/star-yello.svg" alt="" className="star" />
          <img src="./assets/icons/star-yello.svg" alt="" className="star" />
          <img src="./assets/icons/star-yello.svg" alt="" className="star" />
          <img src="./assets/icons/star-yello.svg" alt="" className="star" />
        </div>
      </div>
      <div className="review-image">
        <img src={reviewImage} alt="" />
      </div>
      <div className="review-text">{review}</div>
      <div className="review-date">{date}</div>
    </div>
  );
}

export default Review;
