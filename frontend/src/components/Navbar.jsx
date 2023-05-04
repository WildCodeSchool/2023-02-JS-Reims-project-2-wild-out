import React from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import FavoritesButton from "./FavoritesButton";

function Navbar({ onSearch }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const input = document.getElementById("search-bar");
    const address = input.value;
    input.value = "";
    onSearch(address);
  };

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
        <form onSubmit={handleSearch}>
          <h1> Que souhaitez-vous faire aujourd'hui ?</h1>
          <input type="text" id="search-bar" placeholder="Rechercher un lieu" />
          <button type="submit">Chercher</button>
        </form>
      </div>

      <FavoritesButton />
    </nav>
  );
}

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
