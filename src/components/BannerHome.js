import banner from "../assets/images/imgAccueil.png";

const BannerHome = () => {
  return (
    <div className="banner">
      <img src={banner} alt="image roche ocean" className="bannerHome" />
      <div className="mask"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default BannerHome;
