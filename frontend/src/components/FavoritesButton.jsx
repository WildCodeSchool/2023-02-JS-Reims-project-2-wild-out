import { useState } from "react";
import "./FavoritesButton.css";

function FavoritesButton() {
  const [favorites, setFavorites] = useState(false);
  const [tab, setTab] = useState([]);

  const fetchFavorites = () => {
    fetch(
      "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records"
    )
      .then((response) => response.json())
      .then((data) => {
        setTab(data.records);
      });
    setFavorites(!favorites);
  };

  return (
    <div className="button_favorites">
      <button type="button" onClick={fetchFavorites} id="favoritesButton">
        <img
          src=".\src\assets\favorite-white-heart-48.png"
          alt="heartClickable"
        />
      </button>
      {favorites === true &&
        tab.map((event) => (
          <p key={event.record.id}>{event.record.fields.title_fr}</p>
        ))}
    </div>
  );
}

export default FavoritesButton;
