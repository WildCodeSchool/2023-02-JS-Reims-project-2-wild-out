import "./Navbar.css";
import FavoritesButton from "./FavoritesButton";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="./src/assets/superlogo.png"
        alt="logo du site"
      />
      <img
        className="wildout"
        src="./src/assets/supertitre.png"
        alt="wild-out"
      />
      <FavoritesButton />
    </nav>
  );
}

export default Navbar;
