import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./containers/Main.jsx";
import AdventCalendar from "./containers/adventCalendar/AdventCalendar.jsx";

function App() {
  return (
    <Router>
    <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cssadventcalender" element={<AdventCalendar />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
