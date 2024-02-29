import React from "react";
import starGrey from "../assets/images/starGrey.svg";
import starFull from "../assets/images/starFull.svg";

const Review = (rating) => {
  // Variables
  const countGreyStar = 0;
  const countFullStar = 5;

  // Calculs
  if (rating < 5) {
    countFullStar = rating;
    countGreyStar = 5 - rating;
  }

  console.log(countGreyStar);

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
