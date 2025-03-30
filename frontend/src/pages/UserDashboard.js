/* UserDashboard.js */
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("UserDashboard Mounted!");
  }, []);

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;