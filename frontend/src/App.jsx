import { useState, useEffect } from "react";
import "./App.css";
import sunImage from "./assets/sun.png";
import cloudImage from "./assets/cloud.png";
import rainImage from "./assets/rain.png";
import tempImage from "./assets/temp.png";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);

  useEffect(() => {
    const fetchOneTime = () => {
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=49.27&longitude=4.03&hourly=temperature_2m"
      )
        .then((response) => response.json())
        .then((data) => {
          // extract current hour and filter the data for the current hour only
          const currentHour = new Date().getHours();
          const filteredData = data.hourly.time.filter(
            (time) => new Date(time).getHours() === currentHour
          );
          setFetchedData(data);
          setTodaysData(filteredData);
        });
    };
    fetchOneTime();
  }, []);

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
      <figure className="meteo">
        {todaysData &&
          todaysData.slice(0, 1).map((hour) => (
            <figcaption key={hour}>
              <p className="pMeteo">
                <p className="DH">
                  Date : {hour.substr(0, 10)}
                  <br />
                  Heure : {hour.substr(11, 5)}
                </p>
                <br />
                <img
                  className="imgMeteo"
                  src={getConditionImage(
                    fetchedData.hourly.temperature_2m[
                      fetchedData.hourly.time.indexOf(hour)
                    ]
                  )}
                  alt="condition"
                />
                <br />
                {
                  fetchedData.hourly.temperature_2m[
                    fetchedData.hourly.time.indexOf(hour)
                  ]
                }{" "}
                °C
                <img className="imgTemp" src={tempImage} alt="Température" />
              </p>
            </figcaption>
          ))}
      </figure>
    </div>
  );
}

export default App;
