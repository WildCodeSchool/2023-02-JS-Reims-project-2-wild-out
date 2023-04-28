import React, { useState } from "react";
import "./App.css";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import ApiEvent from "./components/ApiEvent";
import SearchBar from "./components/SearchBar";

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
      <SearchBar onChange={() => {}} />
      <div className="Map">
        <Map />
      </div>
      <ApiEvent />
    </div>
  );
}

export default App;
