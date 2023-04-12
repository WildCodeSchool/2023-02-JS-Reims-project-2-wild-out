import { useState } from "react";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchOneTime = () => {
    fetch("http://localhost:5000/exitIdea")
      .then((resp) => resp.json())
      .then((data) => {
        setFetchedData(data);
      });
  };

  return (
    <div className="App">
      <Home />
      <p>coucou</p>
      <button type="button" onClick={fetchOneTime}>
        Click here
      </button>

      {fetchedData.map((exitIdea) => (
        <p key={exitIdea.id}>{exitIdea.exit}</p>
      ))}
    </div>
  );
}

export default App;
