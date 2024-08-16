// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
const Header = () => {
  const { getCartQuantity } = useContext(CartContext);
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
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? styles.navLinkActive : "")}
          >
            Cart
          </NavLink>
          <span>{getCartQuantity()}</span>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  cartItems: PropTypes.number,
};

export default Header;
