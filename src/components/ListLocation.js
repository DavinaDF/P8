import { loclist } from "../data/locations";
import { NavLink } from "react-router-dom";

const ListLocation = () => {
  return (
    <div className="list-Location">
      <ul className="gallery">
        {loclist.map((location) => (
          <NavLink to="/location">
            <div className="gallery__element" key={location.id}>
              <img src={location.cover} alt="" />
              <h2>{location.title}</h2>
            </div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default ListLocation;
