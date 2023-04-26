import React, { useState } from "react";
import "./App.css";
import Eventlist from "./components/Eventlist";
import sunImage from "./assets/sun.png";
import cloudImage from "./assets/cloud.png";
import rainImage from "./assets/rain.png";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <div className="AppMeteo">
        <Meteo
          todaysData={todaysData}
          fetchedData={fetchedData}
          setFetchedData={setFetchedData}
          setTodaysData={setTodaysData}
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
