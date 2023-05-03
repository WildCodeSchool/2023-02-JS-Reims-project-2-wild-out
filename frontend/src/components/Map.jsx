import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect } from "react";
import PropTypes from "prop-types";

function Map({ events, setEvents }) {
  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records"
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.records);
      });
  }, []);

  return (
    <MapContainer center={[49.256948, 4.019683]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => {
        const { fields } = event.record;
        return (
          <Marker
            key={fields.id}
            position={[
              fields.location_coordinates.lat,
              fields.location_coordinates.lon,
            ]}
          >
            <Popup>
              <h3>{fields.title_fr}</h3>
              <h4>{fields.location_address}</h4>
              <p>{fields.description_fr}</p>
              <img src={fields.image} width={200} alt={fields.title_fr} />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

Map.propTypes = {
  events: PropTypes.arrayOf(PropTypes.string).isRequired,
  setEvents: PropTypes.func.isRequired,
};

export default Map;
