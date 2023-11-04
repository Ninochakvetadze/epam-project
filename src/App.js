import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inner from "./pages/Inner/Inner";
import { makeServer } from "./services/server";

if (process.env.NODE_ENV === "development") {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = makeServer();
}

function App() {
  const [ setInnerVisible ] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home setInnerVisible={setInnerVisible} />}
        />
        <Route
          path="/inner"
          element={<Inner setInnerVisible={setInnerVisible} />}
        />
      </Routes>
    </Router>
  );
}

export default App;