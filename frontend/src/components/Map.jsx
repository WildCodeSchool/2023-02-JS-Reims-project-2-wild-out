import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

function Map() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-openagenda/records?start=0&rows=100"

    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.records);
      });
  }, []);

  return (
    <div className="App">
      <MapContainer center={[49.256948, 4.019683, -0.09]} zoom={13}>
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
    </div>
  );
}
export default Map;
