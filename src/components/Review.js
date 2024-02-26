import React from "react";
import starGrey from "../assets/images/starGrey.svg";
import starFull from "../assets/images/starFull.svg";

const Review = () => {
  return (
    <div className="review">
      <img src={starFull} alt="etoile pleine" className="star" />
      <img src={starFull} alt="etoile pleine" className="star" />
      <img src={starFull} alt="etoile pleine" className="star" />
      <img src={starGrey} alt="etoile vide" className="star" />
      <img src={starGrey} alt="etoile vide" className="star" />
    </div>
  );
};

export default Review;
