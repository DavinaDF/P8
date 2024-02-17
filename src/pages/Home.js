import BannerHome from "../components/BannerHome";
import Gallery from "../components/Gallery";
import ListLocation from "../components/ListLocation";

const Home = () => {
  return (
    <div className="home">
      <BannerHome />
      {/* <Gallery /> */}
      <ListLocation />
    </div>
  );
};

export default Home;
