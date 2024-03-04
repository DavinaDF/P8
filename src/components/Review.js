import React from "react";
import starGrey from "../assets/images/starGrey.svg";
import starFull from "../assets/images/starFull.svg";

const Review = ({ rating }) => {
  // Variables
  console.log(rating);
  let countGreyStar = 0;
  const countFullStar = parseInt(rating);
  let greyStar = [];
  let fullStar = [];
  console.log(countFullStar);

  // Calculs
  if (countFullStar < 5) {
    countGreyStar = 5 - countFullStar;
    console.log(countGreyStar);
  }

  for (let index = 0; index < countFullStar; index++) {
    fullStar.push(
      <img className="star" key={index} src={starFull} alt="Etoile rouge" />
    );
  }
  for (let index = 0; index < countGreyStar; index++) {
    greyStar.push(
      <img className="star" key={index} src={starGrey} alt="Etoile vide" />
    );
  }

  return (
    <div className="review">
      {fullStar}
      {greyStar}
    </div>
  );
};

export default Review;
