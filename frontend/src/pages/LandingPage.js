import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Knock Nok</div>
        <div className="nav-links">
          <Link to="/login" className="signin-btn">Sign In</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Knock Nok</h1>
          <p>Your trusted job-matching platform for professionals and workers.</p>
          <Link to="/register" className="cta-btn">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Find Jobs Easily</h2>
          <p>Connect with clients and get work based on your skills.</p>
        </div>
        <div className="feature">
          <h2>Hire Top Talent</h2>
          <p>Find the best professionals for your needs.</p>
        </div>
        <div className="feature">
          <h2>Secure & Reliable</h2>
          <p>We ensure secure transactions and trusted professionals.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Knock Nok</p>
        <p>MADE BY SOURYA DAS MAHAPATRA, MANDEEP GUPTA, RAHUL SARDAR, RIMPA SAHA</p>
      </footer>
    </div>
  );
};

export default LandingPage;
