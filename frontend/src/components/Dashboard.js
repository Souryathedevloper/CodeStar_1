// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ userType }) => {
    return (
        <div className="dashboard-container">
            <h1>{userType === 'user' ? 'Your Bookings' : 'Your Service Requests'}</h1>
            <p>Track all your previous and upcoming services here.</p>
        </div>
    );
};

export default Dashboard;
