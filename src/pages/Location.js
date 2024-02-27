import PropTypes from "prop-types";
import Tag from "../components/Tag";
import Review from "../components/Review";
import Collapse from "../components/Collapse";
import locations from "../data/location.json";
import { useParams } from "react-router-dom";

const findLocationID = (id) => {
  return locations.find((location) => location.id === id);
};

const Location = () => {
  const { id } = useParams();
  const location = findLocationID(id);

  return (
    <div>
      <div className="informations">
        <div className="infoLocation">
          <h2>{location.title}</h2>
          <h3>{location.location}</h3>
          <div className="tagContainer">
            {location.tags.map((tag, index) => (
              <Tag key={index} tagName={tag} />
            ))}
          </div>
        </div>
        <div className="profil">
          <div className="host">
            <h3>{location.host.name}</h3>
            <img src={location.host.picture} alt={location.host.name} />
          </div>

          <div className="review">
            <Review />
          </div>
        </div>
      </div>

      <div className="locationDescription">
        <Collapse title="Description">
          <p>{location.description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <ul>
            {location.equipments.map((listing, index) => (
              <li key={index}>{listing}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.array.isRequired,
};

export default Location;
