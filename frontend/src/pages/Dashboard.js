import React from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name || "User"}!</h2>
      <div className="dashboard-sections">
        <div className="dashboard-card">
          <h3>My Bookings</h3>
          <p>Track your active and past bookings here.</p>
        </div>
        <div className="dashboard-card">
          <h3>Available Jobs</h3>
          <p>Find new job opportunities as a worker.</p>
        </div>
        <div className="dashboard-card">
          <h3>Account Settings</h3>
          <p>Manage your profile and preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;