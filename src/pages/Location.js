import Tag from "../components/Tag";
import Review from "../components/Review";
import Collapse from "../components/Collapse";
import locations from "../data/location.json";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Carrousel from "../components/Carrousel";

// Fonction qui renvoie les données de l'objet dont l'id est identique à l'id d'entrée
const findLocationID = (id) => {
  return locations.find((location) => location.id === id);
};

// Fonction pour récupérer l'id du logement sélectionné et récupérer les données associées
const Location = () => {
  const { id } = useParams();
  const location = findLocationID(id);
  const naviate = useNavigate();

  useEffect(() => {
    if (!location) {
      naviate("/error");
    }
  });

  // On return null pour déclencher le useEffect
  if (!location) {
    return null;
  }

  return (
    <div className="locationContainer">
      <Carrousel pictures={location.pictures} />
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
            <Review rating={location.rating} />
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

// Location.propTypes = {
//   location: PropTypes.array.isRequired,
// };

export default Location;
