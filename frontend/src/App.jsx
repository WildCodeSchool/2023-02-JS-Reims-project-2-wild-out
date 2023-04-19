import { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
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
    <div>
      <Navbar />

      <div className="App">
        <Map />
        <button type="button" onClick={fetchEvent}>
          click me
        </button>
        {events &&
          events.records.map((event) => (
            <p key={event.record.id}>{event.record.fields.title_fr}</p>
          ))}
      </div>
    </div>
  );
}

export default App;
