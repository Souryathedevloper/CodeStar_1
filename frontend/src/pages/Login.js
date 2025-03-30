import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import "../styles/Login.css"; // Make sure to create this CSS file

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role before proceeding.");
      return;
    }
    if (role === "user") {
      navigate("/user-dashboard");
    } else {
      navigate("/worker-dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    if (!role) {
      alert("Please select a role before proceeding.");
      return;
    }
    try {
      await signInWithPopup(auth, googleProvider);
      if (role === "user") {
        navigate("/user-dashboard");
      } else {
        navigate("/worker-dashboard");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to Knock Nok</h2>
        <p>Please log in to access features.</p>

        <label>Select Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="worker">Worker</option>
        </select>

        <button onClick={handleLogin}>Continue</button>
        <button className="google-btn" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
