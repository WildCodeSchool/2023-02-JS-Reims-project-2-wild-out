import React, { useState, useEffect } from "react";
import "./App.css";
import sunImage from "./assets/sun.png";
import cloudImage from "./assets/cloud.png";
import rainImage from "./assets/rain.png";
import Meteo from "./components/Meteo";
import Map from "./components/Map";
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
      <div className="AppMeteo">
        <Meteo
          todaysData={todaysData}
          getConditionImage={getConditionImage}
          fetchedData={fetchedData}
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
