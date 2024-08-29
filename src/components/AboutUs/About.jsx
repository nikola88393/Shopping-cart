import Reviews from "../Reviews/Reviews";
import AboutCss from "./About.module.css";

const About = () => {
  return (
    <div className={AboutCss.aboutContainer}>
      <h1>Here you can see what some of our satisfied clients have to say</h1>
      <Reviews />
    </div>
  );
};

export default About;
