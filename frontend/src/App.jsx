import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import sunImage from "./assets/sun.png";
import cloudImage from "./assets/cloud.png";
import rainImage from "./assets/rain.png";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);

  const fetchOneTime = () => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=49.27&longitude=4.03&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        // extract today's date and filter the data for the current date only
        const currentDate = new Date().toISOString().substr(0, 10);
        const filteredData = data.hourly.time.filter(
          (date) => date.substr(0, 10) === currentDate
        );
        setTodaysData(filteredData);
      });
  };

  const getConditionImage = (temperature) => {
    if (temperature > 15) {
      return sunImage;
    }
    if (temperature > 10) {
      return cloudImage;
    }
    return rainImage;
  };

  return (
    <div className="App">
      <Home />
      <p>coucou</p>
      <button type="button" onClick={fetchOneTime}>
        click me
      </button>
      {todaysData &&
        todaysData.map((hour, index) => (
          <p key={hour}>
            Date : {hour.substr(0, 10)}
            <br />
            Heure : {hour.substr(11, 5)}
            <br />
            Température: {fetchedData.hourly.temperature_2m[index]} °C
            <img
              src={getConditionImage(fetchedData.hourly.temperature_2m[index])}
              alt="condition"
              width="30px"
            />
          </p>
        ))}
    </div>
  );
}

export default App;
