import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "./App.css";

function App() {
  /* fetch("http://localhost:5000/outing")
    .then((resp) => resp.json())
    .then((data) => console.info(data)); */
  return (
    <div className="App">
      <MapContainer
        center={[49.256948, 4.019683, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.256948, 4.019683, -0.09]}>
          <Popup>
            <h3>Wild Code School</h3>. <br />{" "}
            <h4> 5 rue saint Brice 51000 Reims</h4>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
