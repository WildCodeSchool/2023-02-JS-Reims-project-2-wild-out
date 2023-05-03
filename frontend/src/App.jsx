import React, { useState } from "react";
import "./App.css";
import Eventlist from "./components/Eventlist";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);
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
          <Map />
        </div>
        <Eventlist />
      </section>
    </div>
  );
}
export default App;
