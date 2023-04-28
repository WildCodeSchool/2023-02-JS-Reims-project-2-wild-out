import { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div className="textEventList">
      {events &&
        events.records.map((event) => (
          <p className="eventNew" key={event.record.id}>
            {event.record.fields.title_fr} (
            {event.record.fields.location_coordinates.lon}
            {event.record.fields.location_coordinates.lat})
          </p>
        ))}
      <button type="button" onClick={fetchEvent} id="buttonScrollEvents">
        <img
          src=".\src\assets\chevrons_bas 24px.png"
          alt="chevronsClickables"
        />
      </button>
    </div>
  );
}

export default ApiEvent;
