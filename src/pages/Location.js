// import location from "../data/location.json";
// import { loclist } from "../data/locations";
// import Carrousel from "../components/Carrousel";
import Profil from "../components/Profil";
import Review from "../components/Review";
import Accordion from "../components/Accordion";
// import locations from "../data/location.json";

const Location = (props) => {
  // let pictureArray = [];
  // loclist.map((location) => {
  //   pictureArray = location.pictures;
  // });
  // console.log(pictureArray);

  return (
    <div>
      <h2>Détail d'une location</h2>
      {/* <Carrousel pictures={pictureArray} /> */}
      <Profil />
      <Review />
      <div className="locationDescription">
        <Accordion title="Description">
          <p>{props.description}</p>
        </Accordion>
        <Accordion title="Equipements">
          <p>{props.equipments}</p>
        </Accordion>
      </div>
    </div>
  );
};

export default Location;
