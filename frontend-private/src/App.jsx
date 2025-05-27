import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Brands from "./pages/Brands";
import Models from "./pages/Models";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Employees from "./pages/Employees";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/models" element={<Models />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
