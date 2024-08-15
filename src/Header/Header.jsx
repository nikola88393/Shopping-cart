// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = ({ cartItems = 0 }) => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <ul id="nav" className={styles.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.navLinkActive : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? styles.navLinkActive : "")}
          >
            Store
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.navLinkActive : "")}
          >
            About us
          </NavLink>
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
