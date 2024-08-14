// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
const Header = ({ cartItems = 0 }) => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <ul className={styles.navLinks}>
          <a>Home</a>
          <a>Store</a>
          <a>About us</a>
        </ul>
        <h2>Logo</h2>
        <div>
          <a>Cart icon</a>
          <span>{cartItems}</span>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  cartItems: PropTypes.number,
};

export default Header;
