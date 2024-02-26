import { loclist } from "../data/locations";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const ListLocation = () => {
  return (
    <div className="list-Location">
      <ul className="gallery">
        {loclist.map((location) => (
          <Link to={`/location/${location.id}`}>
            <div className="gallery__element" key={location.id}>
              <img src={location.cover} alt={location.title} />
              <h2>{location.title}</h2>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListLocation;
