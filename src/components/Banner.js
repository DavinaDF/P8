// import banner from "../assets/images/imgAccueil.png";

const BannerHome = ({ banner, alt, title }) => {
  return (
    <div className="banner">
      <img src={banner} alt={alt} className="banner" />
      <div className="mask"></div>
      <h1>{title}</h1>
    </div>
  );
};

export default BannerHome;
