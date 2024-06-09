import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine.js";
import Chips from "./Chips.js";
import Soda from "./Soda.js";
import Candy from "./Candy.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
