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
    Promise.all([
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=49.27&longitude=4.03&hourly=temperature_2m"
      ),
      fetch(
        "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records?start=0&rows=100"
      ),
    ])
      .then(
        (responses) => Promise.all(responses.map((response) => response.json())) // extraire tous les JSON
      )
      .then(([dataMeteo, dataEvents]) => {
        // extract current hour and filter the data for the current hour only
        const currentHour = new Date().getHours();
        const filteredData = dataMeteo.hourly.time.filter(
          (time) => new Date(time).getHours() === currentHour
        );
        setFetchedData(dataMeteo);
        setTodaysData(filteredData);

        setEvents(dataEvents.records);

        const isSunny = dataMeteo.hourly.temperature_2m[0] > 20;

        const eventsFiltered = dataEvents.records.filter((event) =>
          event.record.fields.description_fr
            .concat(...(event.record.fields.keywords_fr ?? []))
            .match(
              isSunny ? /concert|fete|conférence/ : /atelier|cuisine|musée/
            )
        );
        setEvents(eventsFiltered);
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
