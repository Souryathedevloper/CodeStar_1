import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [userType, setUserType] = useState('user');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <select onChange={(e) => setUserType(e.target.value)}>
                <option value="user">User</option>
                <option value="worker">Worker</option>
            </select>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
