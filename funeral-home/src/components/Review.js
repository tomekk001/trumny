import React from "react";
import "../styles/Review.css";

const Review = () => {
  return (
    <section className="review">
      <h2>Customer Reviews</h2>
      <div className="review-item">
        <p>
          "The services were excellent, and the staff was very compassionate."
        </p>
        <span>- John Doe</span>
      </div>
    </section>
  );
};

export default Review;
