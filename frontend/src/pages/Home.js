import React, { useEffect, useState } from "react";

const Home = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole) {
      setRole(userRole);
    } else {
      setRole("guest"); // Default role for unauthenticated users
    }
  }, []);

  return (
    <div>
      {role === "user" ? (
        <UserHome />
      ) : role === "worker" ? (
        <WorkerHome />
      ) : (
        <GuestHome />
      )}
    </div>
  );
};

// Component for Logged-in Users
const UserHome = () => (
  <div>
    <h1>Welcome, User!</h1>
    <p>Explore available services and book appointments.</p>
  </div>
);

// Component for Logged-in Workers
const WorkerHome = () => (
  <div>
    <h1>Welcome, Worker!</h1>
    <p>Find job opportunities and manage your bookings.</p>
  </div>
);

// Component for Unauthenticated Guests
const GuestHome = () => (
  <div>
    <h1>Welcome to Knock Nok</h1>
    <p>Please log in to access features.</p>
  </div>
);

export default Home;
