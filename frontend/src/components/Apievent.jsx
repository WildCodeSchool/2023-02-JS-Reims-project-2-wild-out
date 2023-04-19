import { useState } from "react";

function Apievent() {
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
      <button type="button" onClick={fetchEvent}>
        click me
      </button>
      {events &&
        events.records.map((event) => (
          <p key={event.record.id}>{event.record.fields.title_fr}</p>
        ))}
    </div>
  );
}

export default Apievent;
