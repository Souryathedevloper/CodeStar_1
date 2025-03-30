import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role selection
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registration successful:", userCredential.user);
      
      // Redirect based on role
      if (role === "user") {
        navigate("/user-dashboard");
      } else {
        navigate("/worker-dashboard");
      }
    } catch (error) {
      setError("Error creating account. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register for Knock Nok</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleRegister}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          
          {/* Role Selection */}
          <div className="role-selection">
            <label>
              <input type="radio" name="role" value="user" checked={role === "user"} onChange={() => setRole("user")} />
              User
            </label>
            <label>
              <input type="radio" name="role" value="worker" checked={role === "worker"} onChange={() => setRole("worker")} />
              Worker
            </label>
          </div>

          <button type="submit">Register</button>
        </form>

        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
