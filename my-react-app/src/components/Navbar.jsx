import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>StudentSys</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/students">Students</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/reports">Reports</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
