import React, { useState } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ onSearch }) {
  const [address, setAddress] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(address);
    setAddress("");
  };

  const handleChange = (event) => {
    setAddress(event.target.value);
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
          <input
            type="text"
            id="search-bar"
            placeholder="Rechercher un lieu"
            value={address}
            onChange={handleChange}
          />
          <button type="submit">Chercher</button>
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
