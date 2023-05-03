import React, { useState } from "react";
import "./App.css";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import "./components/Eventlist.css";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);
  const [events, setEvents] = useState([]);

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
        <div className="Map">
          <Map events={events} setEvents={setEvents} />
        </div>
      </section>
    </div>
  );
}
export default App;
