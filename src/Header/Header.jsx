// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = ({ cartItems = 0 }) => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <ul className={styles.navLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="#">About us</NavLink>
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
