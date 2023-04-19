import "./App.css";
import Eventlist from "@components/Eventlist";
import Map from "@components/Map";

function App() {
  return (
    <section className="Allsite">
      <Map />
      <Eventlist />
    </section>
  );
}

export default App;
