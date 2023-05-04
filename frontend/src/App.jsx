import React, { useState, useEffect } from "react";
import "./App.css";
import ApiEvent from "./components/ApiEvent";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records?start=0&rows=100"
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.records);
      });

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
  }, []);

  return (
    <div className="App">
      <section className="navbarmeteo">
        <Navbar />
        <div className="AppMeteo">
          <Meteo
            todaysData={todaysData}
            fetchedData={fetchedData}
            setFetchedData={setFetchedData}
            setTodaysData={setTodaysData}
          />
        </div>
      </section>
      <section className="Allsite">
        <Map events={events} />
        <ApiEvent events={events} />
      </section>
    </div>
  );
}

export default App;
