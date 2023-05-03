import React from "react";
import PropTypes from "prop-types";
import "./ApiEvent.css";

function ApiEvent(props) {
  const { events, setEvents } = props;

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

ApiEvent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.string).isRequired,
  setEvents: PropTypes.func.isRequired,
};

export default ApiEvent;
