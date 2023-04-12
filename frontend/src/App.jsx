import Home from "./pages/Home";

import "./App.css";

function App() {
  fetch("http://localhost:5000/outing")
    .then((resp) => resp.json())
    .then((data) => console.info(data));
  return (
    <div className="App">
      <Home />
      <p>coucou</p>
    </div>
  );
}

export default App;
