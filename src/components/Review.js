import React from "react";
import starGrey from "../assets/images/starGrey.svg";
import starFull from "../assets/images/starFull.svg";

const Review = () => {
  return (
    <div className="review">
      <img src={starFull} alt="etoile pleine" />
      <img src={starFull} alt="etoile pleine" />
      <img src={starFull} alt="etoile pleine" />
      <img src={starGrey} alt="etoile vide" />
      <img src={starGrey} alt="etoile vide" />
    </div>
  );
};

export default Review;
