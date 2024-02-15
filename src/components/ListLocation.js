import { loclist } from "../data/locations";

const ListLocation = () => {
  return (
    <div className="list-Location">
      <ul>
        {loclist.map((location) => (
          <div className="gallery__element" key={location.id}>
            <h2>{location.title}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListLocation;
