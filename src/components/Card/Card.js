// snippet for arrow function notation is rafce
// snippet for traditional funct notation is rfce

import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    // deconstruct your props object
    <div className="card-wrapper">
      <img src={props.img} alt="" className="card-image" />
      <div className="card-ratings-and-loc-wrapper">
        <span className="card-rating">{props.rating}</span>
        <span className="card-review-count">({props.reviewCount})</span>
        <span className="card-location">{props.city}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-description">{props.description}</p>
      <p className="card-price-paragraph">
        <span className="card-price-info">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
