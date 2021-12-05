import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Generate from "./Generate";
import Top from "./Top";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <nav>
          <Link to="/generate">Generate</Link> |{" "}
          <Link to="/top">Top Waifus</Link>
        </nav>
        <Routes>
          <Route path="/generate" element={<Generate />} />
          <Route path="/top" element={<Top />} />
          <Route path="*" element={<Navigate to="/generate" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
