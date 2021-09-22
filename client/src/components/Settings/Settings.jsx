import React from "react";
import("./Settings.css");

const Settings = () => {
  return (
    <div className="settings-container">
      <h2 className="settings-header">Settings</h2>
      <a className="logout-btn" href="http://localhost:5000/auth/logout">
        Logout
      </a>
    </div>
  );
};

export default Settings;
