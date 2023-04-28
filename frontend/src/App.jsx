import React, { useState } from "react";
import "./App.css";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import ApiEvent from "./components/ApiEvent";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [todaysData, setTodaysData] = useState(null);

  return (
    <div className="App">
      <section className="navbarmeteo">
        <div className="navbaronly">
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
      </section>

      <section className="Allsite">
        <div className="Map">
          <Map />
        </div>
      </section>
      <ApiEvent />
    </div>
  );
}

export default App;
