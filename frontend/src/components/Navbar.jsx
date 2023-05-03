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
      <div className="phrase">
        <h1> Que souhaitez-vous faire aujourd'hui ?</h1>
      </div>
      <FavoritesButton />
    </nav>
  );
}

export default Navbar;
