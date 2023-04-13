import { useState } from "react";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [fetchEvents, setFetchEvents] = useState(null);

  const fetchEvent = () => {
    fetch(
      "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records"
    )
      .then((response) => response.json())
      .then((Events) => {
        setFetchEvents(Events);
      });
  };

  return (
    <div className="App">
      <Home />
      <p>coucou</p>

      <button type="button" onClick={fetchEvent}>
        click me
      </button>
      {fetchEvents &&
        fetchEvents.records.map((event) => (
          <p key={event.record.id}>{event.record.fields.title_fr}</p>
        ))}
    </div>
  );
}

export default App;
