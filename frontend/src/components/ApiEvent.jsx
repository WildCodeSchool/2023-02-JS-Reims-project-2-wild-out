import { useState } from "react";
import "./ApiEvent.css";
import PropTypes from "prop-types";

function ApiEvent({ events }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <details className="textEventList" onToggle={() => setOpen(!isOpen)}>
      {events.map((event) => (
        <p className="eventNew" key={event.record.id}>
          {event.record.fields.title_fr} ({event.record.fields.location_address}
          )
        </p>
      ))}
      <summary id="buttonScrollEvents" className={isOpen ? "open" : "close"}>
        <img
          src=".\src\assets\chevrons_bas 24px.png"
          alt="chevronsClickables"
        />
      </summary>
    </details>
  );
}

ApiEvent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchedData: PropTypes.shape({
    hourly: PropTypes.shape({
      temperature_2m: PropTypes.arrayOf(PropTypes.number),
      time: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default ApiEvent;
