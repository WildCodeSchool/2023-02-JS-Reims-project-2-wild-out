import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher un événement..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
