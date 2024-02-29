import { useState } from "react";
import svgFleche from "../assets/images/arrow.svg";

const Collapse = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`collapse ${isVisible ? "visible" : ""}`}>
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
