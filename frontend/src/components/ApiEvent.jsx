import "./ApiEvent.css";

function ApiEvent({ events, setEvents }) {
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
          <p key={event.record.id}>
            {event.record.fields.title_fr} (lon:
            {event.record.fields.location_coordinates.lon}/ lat:
            {event.record.fields.location_coordinates.lat})
          </p>
        ))}
    </div>
  );
}

export default ApiEvent;
