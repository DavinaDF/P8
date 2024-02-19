import Accordion from "../components/Accordion";
import BannerAbout from "../components/BannerAbout";
// import { aboutDescription } from "../data/kasaAbout";

const About = () => {
  return (
    <div className="about">
      <BannerAbout />
      <Accordion />
      {/* <div className="about_section">
        <ul>
          {aboutDescription.map((description) => (
            <div className="accordion">
              <button className="title">{description.title}</button>
              <div className="content">
                <p>{description.text}</p>
              </div>
            </div>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default About;
