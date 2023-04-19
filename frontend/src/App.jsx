import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import Eventlist from "@components/Eventlist";

function App() {
  return (
    <section className="Allsite">
      <Eventlist />

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
              <h3>Hi! This is Wild Code School</h3> <br /> <p>You are here</p>
              <img
                src="https://www.myeventnetwork.com/sites/default/files/styles/1_1_w200/public/2020-12/1547218298050.png?itok=qceammKw"
                alt="wildCodeSchool"
              />
            </Popup>
          </Marker>
          <Marker position={[49.2541286, 4.0308016, -0.09]}>
            <Popup>
              <h3>Les 150 ans de l'Opéra de Reims</h3> <br />
              <h4>Du 22 Avr au 03 Mai</h4>
              <p>
                L'Opéra de Reims célèbre ses 150 ans depuis sa création en 1873.
                Cette salle de spectacle emblématique de la ville est une source
                de fierté pour les Rémois, qui sont invités à franchir les
                portes de l'Opéra pour vivre pleinement ces instants où
                l'Histoire nous réunira tous. Pour célébrer cet événement,
                l'Opéra de Reims organise des festivités artistiques,
                culturelles et patrimoniales du 22 avril au 3 mai 2023. Le
                public pourra découvrir des mini-concerts, des expositions, des
                visites de l'Opéra et bien plus encore. L'Opéra accueillera
                gratuitement les visiteurs les samedis et mercredis après-midi.
              </p>
              <img
                src="https://cdt51.media.tourinsoft.eu/upload/affiche-150-ans-2.JPG?width=1170&height=590"
                width="200px"
                alt="Opera Reims"
              />
            </Popup>
          </Marker>
          <Marker position={[49.1942873, 3.9472577, -0.09]}>
            <Popup>
              <h3>Jeudi Jazzy au Château de Sacy</h3> <br />
              <h4>Du 13 Avr au 28 Sep</h4>
              <p>
                Tous les jeudis, dégustez la carte gourmande de notre Chef Andy
                Bouglé, en musique.
              </p>
              <img
                src="https://cdt51.media.tourinsoft.eu/upload/Capture-d-ecran-2023-03-24-a-20.26.43.png"
                width="200px"
                alt="Jazz"
              />
            </Popup>
          </Marker>
          <Marker position={[49.0835, 3.9446, -0.09]}>
            <Popup>
              <h3>15ÈME festival de la Bande Dessinée Hautvilliers </h3> <br />
              <h4>Du 15/04/23 au 16/04/23</h4>{" "}
              <h5>
                <strong>Tarif:</strong> 3€
              </h5>
              <p>
                Festival de Bande Dessinée , avec expositions,rencontres etc..
              </p>
              <img
                src="http://www.bd-bulles.com/images/2023/hautvillers-sans-logos.jpg"
                width="200px"
                alt="BD"
              />
            </Popup>
          </Marker>
          <Marker position={[49.2682003, 4.035719, -0.09]}>
            <Popup>
              <h3>Concert - Petite Noir + Okala </h3> <br />
              <h4>Du 13/04/2023 au 13/04/2023 À 20:00</h4>
              <h5>
                <strong>Tarif:</strong> 6€
              </h5>
              <p>
                Festival de Bande Dessinée , avec expositions,rencontres etc..
              </p>
              <img
                src="https://cdt51.media.tourinsoft.eu/upload/Petite-Noir---Web-Res---Lucie-Rox-2.jpg"
                width="200px"
                alt="Concert"
              />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Eventlist />
    </section>
  );
}

export default App;
