import { useState } from "react";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";

const Carrousel = ({ pictures }) => {
  // State du composant : l'index actuel de la slide visible
  const [currentIndex, setIndex] = useState(0);

  // ---- Comportements
  // Au clic sur la flèche de gauche, changement état index slide -1
  const handlePreviousSlide = () => {
    setIndex((previousIndex) =>
      previousIndex === 0 ? pictures.length - 1 : previousIndex - 1
    );
  };

  // Au clic sur la flèche de droite, changement état index slide +1
  const handleNextSlide = () => {
    setIndex((nextIndex) =>
      nextIndex === pictures.length - 1 ? 0 : nextIndex + 1
    );
  };

  // Variables
  const currentSlide = pictures[currentIndex];
  // const countSlide = pictures.length;

  return (
    <div className="carrousel">
      <img
        onClick={handlePreviousSlide}
        className="arrowLeft"
        src={arrowLeft}
        alt="flèche photo précédente"
      />
      <img
        onClick={handleNextSlide}
        className="arrowRight"
        src={arrowRight}
        alt="flèche photo suivante"
      />
      <img
        className="currentSlide"
        src={currentSlide}
        alt={`Photo du logement n° ${currentIndex}`}
      />
      <div className="slideNumber">{`${currentIndex + 1}/${
        pictures.length
      }`}</div>
    </div>
  );
};

export default Carrousel;
