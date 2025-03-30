import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings([...bookings, formData]);
    setFormData({ service: "", date: "", time: "", location: "" });
  };

  return (
    <div className="booking-container">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Service:</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
      <div className="booking-list">
        <h3>Your Bookings</h3>
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.service} - {booking.date} at {booking.time} ({booking.location})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booking;
