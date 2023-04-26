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
      <div>
        <Navbar />
      </div>
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
        <button type="button" onClick={fetchEvent}>
          click me
        </button>
        {events &&
          events.records.map((event) => (
            <p key={event.record.id}>{event.record.fields.title_fr}</p>
          ))}
      </div>
      <div>
        <ApiEvent />
      </div>
    </div>
  );
}

export default App;
