import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Header></Header>
      <h1>Here you can see what some of our satisfied clients have to say</h1>
      <div>
        <nav>
          <ul>
            <li>Person 1</li>
            <li>Person 2</li>
            <li>Person 3</li>
            <li>Person 4</li>
          </ul>
        </nav>
        <div>
          <div>
            <p>image</p>
            <h2>Very satisfied</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              expedita aut amet! Dicta facere, rerum minus, harum consectetur
              illum illo, praesentium alias eius eaque magnam nostrum ipsum
              velit eveniet. Aliquid.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
