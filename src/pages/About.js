import Collapse from "../components/Collapse";
import BannerAbout from "../components/BannerAbout";
import { aboutDescription } from "../data/kasaAbout";

const About = () => {
  return (
    <div className="about">
      <BannerAbout />
      <div className="about_section">
        {aboutDescription.map((description) => (
          <Collapse title={description.title}>
            <p>{description.text}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
