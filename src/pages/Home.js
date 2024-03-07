import Banner from "../components/Banner";
import ListLocation from "../components/ListLocation";
import bannerHome from "../assets/images/imgAccueil.png";

const Home = () => {
  return (
    <div className="home">
      <Banner
        banner={bannerHome}
        alt="Rocher au bord de l'océan"
        title="Chez vous, partout et ailleurs"
      />
      <ListLocation />
    </div>
  );
};

export default Home;
