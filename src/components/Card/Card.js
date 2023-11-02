// snippet for arrow function notation is rafce
// snippet for traditional funct notation is rfce

import React from "react";
import "./card.css";

const card = (props) => {
  return (
    // deconstruct your props object
    <div className="card-wrapper">
      <img src="" alt="" className="card-image" />
      <div className="card-ratings-and-loc-wrapper">
        <span className="card-rating">5.0</span>
        <span className="card-review-count">(35)</span>
        <span className="card-location">Japan</span>
      </div>
      <p className="card-description">There is some description</p>
      <p className="card-price-paragraph">
        <span className="card-price-info">From $46</span> / person
      </p>
    </div>
  );
};

export default card;
