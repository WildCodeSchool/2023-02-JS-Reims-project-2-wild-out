import { useState } from "react";
import "./App.css";
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
        // extract current hour and filter the data for the current hour only
        const currentHour = new Date().getHours();
        const filteredData = data.hourly.time.filter(
          (time) => new Date(time).getHours() === currentHour
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
      <button type="button" onClick={fetchOneTime}>
        Afficher les prévisions météo
      </button>
      <div className="zoom d-flex justify-content-center">
        <div className="p-2 m-2">
          <figure className="meteo">
            {todaysData &&
              todaysData.slice(0, 1).map((hour) => (
                <figcaption key={hour}>
                  <p>
                    Date : {hour.substr(0, 10)}
                    <br />
                    Heure : {hour.substr(11, 5)}
                    <br />
                    Température :{" "}
                    {
                      fetchedData.hourly.temperature_2m[
                        fetchedData.hourly.time.indexOf(hour)
                      ]
                    }{" "}
                    °C
                    <br />
                    <img
                      src={getConditionImage(
                        fetchedData.hourly.temperature_2m[
                          fetchedData.hourly.time.indexOf(hour)
                        ]
                      )}
                      alt="condition"
                      width="50px"
                    />
                  </p>
                </figcaption>
              ))}
          </figure>
        </div>
      </div>
    </div>
  );
}

export default App;
