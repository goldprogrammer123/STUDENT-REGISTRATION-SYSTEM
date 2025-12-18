import React, { useState } from 'react';
import './Sidebar.css';
import { 
  FaTachometerAlt, 
  FaUserPlus, 
  FaUsers, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

function Sidebar({ onToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { id: 'register', icon: <FaUserPlus />, label: 'Register Student' },
    { id: 'students', icon: <FaUsers />, label: 'View Students' },
    { id: 'reports', icon: <FaChartBar />, label: 'Reports' },
    { id: 'settings', icon: <FaCog />, label: 'Settings' },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    console.log(`Navigating to ${menuId}`);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      alert('Logging out...');
    }
  };

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    // Notify parent component about sidebar state change
    if (onToggle) {
      onToggle(newCollapsedState);
    }
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          {!isCollapsed && (
            <div className="logo">
              <span className="logo-icon">🎓</span>
              <div className="logo-text">
                <h2>StudentSys</h2>
                <p>Admin Panel</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="logo-collapsed">
              <span className="logo-icon">🎓</span>
            </div>
          )}
        </div>
        
        <button 
          className="collapse-btn"
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      
      <nav className="sidebar-menu">
        <ul>
          {menuItems.map((item) => (
            <li 
              key={item.id}
              className={activeMenu === item.id ? 'active' : ''}
              onClick={() => handleMenuClick(item.id)}
              aria-current={activeMenu === item.id ? "page" : undefined}
            >
              <span className="menu-icon">{item.icon}</span>
              {!isCollapsed && <span className="menu-label">{item.label}</span>}
              {activeMenu === item.id && !isCollapsed && (
                <span className="active-indicator" aria-hidden="true"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" />
          {!isCollapsed && <span>Logout</span>}
        </button>
        {!isCollapsed && (
          <div className="sidebar-version">
            <small>v1.0.0</small>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;