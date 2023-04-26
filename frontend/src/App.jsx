import React, { useState } from "react";
import "./App.css";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import ApiEvent from "./components/ApiEvent";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);

  const [events, setEvents] = useState(null);

  const fetchEvent = () => {
    fetch(
      "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records"
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  };

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
