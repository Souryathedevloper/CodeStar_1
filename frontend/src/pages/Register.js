import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./Register.css";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(""); // Worker or User
    const navigate = useNavigate();

    // Register Function
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!role) {
            alert("Please select User or Worker.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save User Info in Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                email,
                role, // Saving the role
            });

            alert("Registration Successful!");
            navigate("/login");
        } catch (error) {
            alert(error.message);
        }
    };

    // Google Sign-Up
    const handleGoogleSignUp = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                firstName: user.displayName.split(" ")[0],
                lastName: user.displayName.split(" ")[1] || "",
                email: user.email,
                role, // Ensure role selection
            });

            alert("Registration Successful!");
            navigate("/login");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="input-group">
                        <label>Select Role</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)} required>
                            <option value="">-- Select --</option>
                            <option value="user">User</option>
                            <option value="worker">Worker</option>
                        </select>
                    </div>

                    <button type="submit">Register</button>
                </form>

                <button className="google-signup" onClick={handleGoogleSignUp}>Sign Up with Google</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
