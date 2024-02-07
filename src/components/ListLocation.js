const loc = ["appartement London", "app Paris", "loft SF", "What u want"];

const ListLocation = () => {
  return (
    <div className="list-Location">
      <ul>
        {loc.map((location, index) => (
          <li key={`${location}-${index}`}>{location}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListLocation;
