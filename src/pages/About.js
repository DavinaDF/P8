import Accordion from "../components/Accordion";
import BannerAbout from "../components/BannerAbout";
import { aboutDescription } from "../data/kasaAbout";

const About = () => {
  return (
    <div className="about">
      <BannerAbout />
      <div className="about_section">
        {aboutDescription.map((description) => (
          <Accordion title={description.title}>
            <p>{description.text}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default About;
