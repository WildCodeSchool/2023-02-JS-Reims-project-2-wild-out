import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import sunImage from "./assets/sun.png";
import cloudImage from "./assets/cloud.png";
import rainImage from "./assets/rain.png";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState([]);

  const fetchOneTime = () => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=49.27&longitude=4.03&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        // extract today's date and filter the data for the same day as today
        const now = new Date();

        const dateStrings = data.hourly.time;

        const dates = dateStrings.map((dateString) => new Date(dateString));

        const filteredDates = dates.filter(
          (date) =>
            date.getFullYear() === now.getFullYear() &&
            date.getMonth() === now.getMonth() &&
            date.getDate() === now.getDate()
        );
        setTodaysData(filteredDates);
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
      {todaysData.map((date, index) => (
        <p
          key={date.getTime()}
          style={{
            color: `${date < new Date() ? "red" : "green"}`,
          }}
        >
          Date :{" "}
          {`${date.getDate()}/${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}/${date.getFullYear()}`}
          <br />
          Heure : {`${date.getHours()}h`}
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
