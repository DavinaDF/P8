import { useState } from "react";
import svgFleche from "../assets/images/arrow.svg";

const Collapse = (props) => {
  // State du composant : visibilité ou non du contenu du collapse
  const [isVisible, setIsVisible] = useState(false);

  // Comportement : changer la visibilité du contenu
  const handleShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapse">
      <div className="title" onClick={handleShow}>
        <h3>{props.title}</h3>
        <img
          src={svgFleche}
          alt="flèche"
          className={`arrow ${isVisible ? "down" : ""}`}
        />
      </div>
      <div className={`content ${isVisible ? "animate" : ""}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
