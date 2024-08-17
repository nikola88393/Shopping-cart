import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className={styles.homeContainer}>
        <div className={styles.textContainer}>
          <h2>Welcome to our store. Here you can find everything you need.</h2>
          <h3>Our products always deliver on quality!</h3>
          <div className={styles.btnContainer}>
            <Link className={styles.btn} to="store">
              Shop now
            </Link>
            <Link className={styles.btn} to="#">
              Check out reviews
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
