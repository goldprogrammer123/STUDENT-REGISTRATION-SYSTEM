import React, { useState, useEffect } from 'react';
import './App.css';

import Sidebar from './pages/Sidebar/Sidebar.jsx';
import Header from './component/Header/Header.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
// or DashboardCards if that is your actual component
// import DashboardCards from './pages/Dashboard/DashboardCards';

function App() {
  /* ===============================
     Sidebar collapse state
  =============================== */
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  /* ===============================
     Dashboard data state
  =============================== */
  const [dashboardData, setDashboardData] = useState({
    totalStudents: 0,
    maleStudents: 0,
    femaleStudents: 0,
    activeStudents: 0
  });

  /* ===============================
     Simulate API call
  =============================== */
  useEffect(() => {
    const mockData = {
      totalStudents: 245,
      maleStudents: 130,
      femaleStudents: 115,
      activeStudents: 230
    };

    setDashboardData(mockData);
  }, []);

  /* ===============================
     Render
  =============================== */
  return (
    <div className="app-container">
      <Sidebar onToggle={handleSidebarToggle} />

      <div
        className={`main-content ${
          isSidebarCollapsed ? 'collapsed-sidebar' : ''
        }`}
      >
        <Header />
        <Dashboard data={dashboardData} />
        {/* or <DashboardCards data={dashboardData} /> */}
      </div>
    </div>
  );
}

export default App;
