import React from 'react';
import './Booking.css';

const Booking = ({ userType }) => {
    return (
        <div className="booking-container">
            <h1>Book a Service</h1>
            <p>{userType === 'user' ? 'Choose from a range of services.' : 'Manage service requests.'}</p>
            <button className="booking-btn">{userType === 'user' ? 'Book Now' : 'View Requests'}</button>
        </div>
    );
};

export default Booking;
