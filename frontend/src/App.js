import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/worker-dashboard" element={<WorkerDashboard />} />
        {/* If "/dashboard" is missing, add a fallback */}
        <Route path="/dashboard" element={<h1>Select a role to proceed</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
