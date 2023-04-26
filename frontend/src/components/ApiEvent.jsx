import { useState } from "react";
import "./ApiEvent.css";

function ApiEvent() {
  const [events, setEvents] = useState(null);

  const fetchEvent = () => {
    fetch(
      "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records?start=0&rows=50"
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  };

  return (
    <div className="button_scroll">
      <button type="button" onClick={fetchEvent} id="buttonScrollEvents">
        <img
          src=".\src\assets\chevrons_bas 24px.png"
          alt="chevronsClickables"
        />
      </button>
      {events &&
        events.records.map((event) => (
          <p key={event.record.id}>{event.record.fields.title_fr}</p>
        ))}
    </div>
  );
}

export default ApiEvent;
