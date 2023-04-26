import React, { useState, useEffect } from "react";
import "./App.css";
import sunImage from "./assets/sun.png";
import cloudImage from "./assets/cloud.png";
import rainImage from "./assets/rain.png";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import ApiEvent from "./components/ApiEvent";

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
      <Navbar />
      <div className="AppMeteo">
        <Meteo
          todaysData={todaysData}
          getConditionImage={getConditionImage}
          fetchedData={fetchedData}
        />
      </div>
      <div className="Map">
        <Map />
      </div>
      <ApiEvent />
    </div>
  );
}

export default App;
