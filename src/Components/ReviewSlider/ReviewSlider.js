import React from "react";
import "./reviewSlider.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { reviewsData } from "../../review-data";
export default function ReviewSlider() {
  const handleBackward = () => {
    document.getElementById("cards").scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };
  const handleForward = () => {
    document.getElementById("cards").scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h2 className="review-heading">Testimonials</h2>
      <div className="carousel-container">
        <FiArrowLeft className="nav-left" onClick={handleBackward} />
        <FiArrowRight className="nav-right" onClick={handleForward} />
        <div className="cards" id="cards">
          {reviewsData.map((review) => {
            return (
              <div className="card">
                <p><b>{review.reviewer}</b></p>
                <p>{review.review}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
