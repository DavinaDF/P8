import { loclist } from "../data/locations";

const ListLocation = () => {
  return (
    <div className="list-Location">
      <ul className="gallery">
        {loclist.map((location) => (
          <div className="gallery__element" key={location.id}>
            <img src={location.cover} alt="" />
            <h2>{location.title}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListLocation;
