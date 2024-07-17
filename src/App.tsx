import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
