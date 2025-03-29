import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Booking from './components/Booking';
import Services from './components/Services';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/booking" element={<Booking userType="user" />} />
                <Route path="/services" element={<Services />} />
                <Route path="/dashboard" element={<Dashboard userType="user" />} />
            </Routes>
        </>
    );
}

export default App;
