import Home from "./pages/Home";
import { useState } from "react";
import "./App.css";

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchOneTime = () => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=49.27&longitude=4.03&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      });
  };

  return (
    <div className="App">
      <Home />
      <p>coucou</p>

      <button type="button" onClick={fetchOneTime}>
        click me
      </button>
      {fetchedData &&
        fetchedData.hourly.time.map((hour, index) => (
          <p key={hour}>
            heure :{hour} temp:{fetchedData.hourly.temperature_2m[index]}
          </p>
        ))}
    </div>
  );
}

export default App;
