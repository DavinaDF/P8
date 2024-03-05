import React from "react";
import starGrey from "../assets/images/starGrey.svg";
import starFull from "../assets/images/starFull.svg";

const Review = ({ rating }) => {
  // Variables
  let countGreyStar = 0;
  const countFullStar = parseInt(rating);
  let greyStar = [];
  let fullStar = [];

  // Calcul du nombre d'étoiles vides
  if (countFullStar < 5) {
    countGreyStar = 5 - countFullStar;
  }

  // Création des tableaux contenant le bon nombre d'étoiles pleines et vides
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
