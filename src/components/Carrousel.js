import { useState } from "react";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";

const Carrousel = ({ pictures }) => {
  // State du composant
  const [currentIndex, setIndex] = useState(0);

  // Comportements
  const handlePreviousSlide = () => {
    setIndex((previousIndex) =>
      previousIndex === 0 ? pictures.length - 1 : previousIndex - 1
    );
  };

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
    </div>
  );
};

export default Carrousel;
