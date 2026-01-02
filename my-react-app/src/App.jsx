import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Routes, Route, and Navigate
import './App.css';

import Sidebar from './pages/Sidebar/Sidebar.jsx';
import Header from './component/Header/Header.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Register from './pages/Register/Register.jsx';
import Students from './pages/Students/Students.jsx';
import Report from './pages/Report/Report.jsx';
import Settings from './pages/Settings/Settings.jsx';
import Login from './pages/Login/Login.jsx'; // Import Login page
import Home from './pages/Home/Home.jsx'; // Import Home page

function App() {
  /* ===============================
     Sidebar collapse state
  =============================== */
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  /* ===============================
     Render
  =============================== */
  console.log("App component is rendering");

  return (
    <div className="app-container">
  
      <Sidebar onToggle={handleSidebarToggle} />
      <div
        className={`main-content ${
          isSidebarCollapsed ? 'collapsed-sidebar' : ''
        }`}
      >
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/students" element={<Students />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
