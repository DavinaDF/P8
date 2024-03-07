import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import bannerAbout from "../assets/images/imgApropos.png";
import { aboutDescription } from "../data/kasaAbout";

const About = () => {
  return (
    <div className="about">
      <Banner banner={bannerAbout} alt="Montagnes" title="" />
      <div className="about_section">
        {aboutDescription.map((description, index) => (
          <Collapse title={description.title} key={index}>
            <p>{description.text}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
