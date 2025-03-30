import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
    rating: user?.rating || "",
    photo: user?.photo || "",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-pic">
        <img src={profileData.photo || "default-profile.png"} alt="Profile" />
        <input type="file" accept="image/*" onChange={(e) => console.log("Upload photo logic here")} />
      </div>
      <div className="profile-details">
        <label>Name: <input type="text" name="name" value={profileData.name} onChange={handleChange} /></label>
        <label>Username: <input type="text" name="username" value={profileData.username} onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" value={profileData.email} onChange={handleChange} /></label>
        <label>Mobile: <input type="tel" name="mobile" value={profileData.mobile} onChange={handleChange} /></label>
        <label>Rating: <input type="text" name="rating" value={profileData.rating} readOnly /></label>
      </div>
    </div>
  );
};

export default Profile;