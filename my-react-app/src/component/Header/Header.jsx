import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="dashboard-header">
      <h1>Welcome to Student Registration Dashboard</h1>
      <div className="header-info">
        <span className="admin-info">Admin: System Administrator</span>
        <span className="current-date">{new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
      </div>
    </header>
  );
}

export default Header;