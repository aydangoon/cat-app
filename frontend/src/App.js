import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="container-fluid">
      <h1>Cat Facts</h1>
      <button
        className="btn btn-primary mb-2"
        onClick={() => {
          setLoading(true);
          fetch("https://catfact.ninja/fact")
            .then((res) => res.json())
            .then(({ fact }) => {
              setFact(fact);
              setLoading(false);
            });
        }}
      >
        Get a Cat Fact
      </button>
      <br />
      {loading ? (
        <div className="spinner-border text-primary" />
      ) : (
        <div>{fact}</div>
      )}
    </div>
  );
}

export default App;
