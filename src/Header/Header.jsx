import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Header = ({ cartItems = 0 }) => {
  return (
    <header>
      <ul>
        <Link>Home</Link>
        <Link>Store</Link>
        <Link>About us</Link>
      </ul>
      <h2>Logo</h2>
      <div>
        <Link>Cart icon</Link>
        <span>{cartItems}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartItems: PropTypes.number,
};

export default Header;
