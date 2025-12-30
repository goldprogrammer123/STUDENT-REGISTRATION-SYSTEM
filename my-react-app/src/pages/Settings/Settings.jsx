import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [profile, setProfile] = useState({
    username: "john_doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

  const [preferences, setPreferences] = useState({
    theme: "light",
    notifications: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    console.log("Profile:", profile);
    console.log("Preferences:", preferences);
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p>Manage your profile, preferences, and account security.</p>

      {/* System Information Section */}
      <div className="settings-section">
        <h3>System Information</h3>
        <p>
          <strong>System Name:</strong> Student Registration System
        </p>
        <p>
          <strong>Version:</strong> 1.0.0
        </p>
        <p>
          <strong>Description:</strong> This system is designed to manage student
          registrations, track student data, and generate reports. It provides an
          intuitive interface for administrators to manage students, view reports,
          and configure system settings.
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li>Dashboard with key metrics and insights.</li>
          <li>Student registration and management.</li>
          <li>Graphical reports for data visualization.</li>
          <li>Customizable settings for user preferences.</li>
        </ul>
        <p>
          <strong>Developed By:</strong> GoldProgrammer123
        </p>
        <p>
          <strong>Contact:</strong> support@student-system.com
        </p>
      </div>

      {/* Application Preferences */}
      <div className="settings-section">
        <h3>Application Preferences</h3>
        <div className="form-group">
          <label>Theme</label>
          <select
            name="theme"
            value={preferences.theme}
            onChange={handlePreferencesChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={preferences.notifications}
              onChange={handlePreferencesChange}
            />
            Enable Notifications
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="settings-actions">
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
