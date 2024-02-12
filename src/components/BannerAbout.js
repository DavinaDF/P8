import banner from "../assets/images/imgApropos.png";

const BannerAbout = () => {
  return (
    <div className="banner">
      <img src={banner} alt="image montagnes" className="bannerAbout" />
      <div className="mask"></div>
    </div>
  );
};

export default BannerAbout;
