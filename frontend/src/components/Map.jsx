import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";

function Map({ events }) {
  return (
    <MapContainer
      center={[48.866667, 2.333333, -0.09]} /* coordinates map display Paris */
      zoom={11}
      style={{ flexGrow: 1, minHeight: "initial" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <Marker
          key={event.record.id}
          position={[
            event.record.fields.location_coordinates.lat,
            event.record.fields.location_coordinates.lon,
          ]}
        >
          <Popup>
            <h3>{event.record.fields.title_fr}</h3>
            <h4>{event.record.fields.location_address}</h4>
            <p>{event.record.fields.description_fr}</p>
            <img
              src={event.record.fields.image}
              width={200}
              alt={event.record.fields.title_fr}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
Map.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      record: PropTypes.shape({
        id: PropTypes.string.isRequired,
        fields: PropTypes.shape({
          location_coordinates: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lon: PropTypes.number.isRequired,
          }).isRequired,
          title_fr: PropTypes.string.isRequired,
          location_address: PropTypes.string.isRequired,
          description_fr: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
};
export default Map;
