import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoleSelection.css";

const RoleSelection = () => {
    const navigate = useNavigate();

    const handleSelectRole = (role) => {
        navigate(`/login?role=${role}`);
    };

    return (
        <div className="role-selection-container">
            <h2>Select Your Role</h2>
            <div className="role-buttons">
                <button onClick={() => handleSelectRole("user")} className="role-btn">User</button>
                <button onClick={() => handleSelectRole("worker")} className="role-btn">Worker</button>
            </div>
        </div>
    );
};

export default RoleSelection;
