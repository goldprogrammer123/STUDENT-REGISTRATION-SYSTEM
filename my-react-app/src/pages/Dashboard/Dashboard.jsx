import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import {
  FaUsers,
  FaMale,
  FaFemale,
  FaUserCheck,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
  FaChartLine,
  FaUserPlus,
  FaChartBar,
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    maleStudents: 0,
    femaleStudents: 0,
    activeStudents: 0,
    newThisMonth: 0,
    graduatingThisYear: 0,
    internationalStudents: 0,
    averageAttendance: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const totalResponse = await fetch(
          "http://127.0.0.1:8000/students/count/"
        );
        const maleResponse = await fetch(
          "http://127.0.0.1:8000/students/count-male/"
        );
        const femaleResponse = await fetch(
          "http://127.0.0.1:8000/students/count-female/"
        );

        const totalStudents = await totalResponse.json();
        const maleStudents = await maleResponse.json();
        const femaleStudents = await femaleResponse.json();

        setStats({
          totalStudents: totalStudents.count,
          maleStudents: maleStudents.count,
          femaleStudents: femaleStudents.count,
          activeStudents: totalStudents.count - 50, // Example calculation
          newThisMonth: 45, // Mock data for now
          graduatingThisYear: 320, // Mock data for now
          internationalStudents: 89, // Mock data for now
          averageAttendance: 94.5, // Mock data for now
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  const mainCards = [
    {
      id: 1,
      title: "Total Students",
      value: stats.totalStudents,
      icon: <FaUsers />,
      change: "+12%",
    },
    {
      id: 2,
      title: "Male Students",
      value: stats.maleStudents,
      icon: <FaMale />,
      change: "+8%",
    },
    {
      id: 3,
      title: "Female Students",
      value: stats.femaleStudents,
      icon: <FaFemale />,
      change: "+15%",
    },
    {
      id: 4,
      title: "Active Students",
      value: stats.activeStudents,
      icon: <FaUserCheck />,
      change: "+5%",
    },
  ];

  const secondaryCards = [
    {
      id: 5,
      title: "New This Month",
      value: stats.newThisMonth,
      icon: <FaCalendarAlt />,
    },
    {
      id: 6,
      title: "Graduating This Year",
      value: stats.graduatingThisYear,
      icon: <FaGraduationCap />,
    },
    {
      id: 7,
      title: "International Students",
      value: stats.internationalStudents,
      icon: <FaUniversity />,
    },
    {
      id: 8,
      title: "Average Attendance",
      value: `${stats.averageAttendance}%`,
      icon: <FaChartLine />,
    },
  ];

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome">
        <h2>Dashboard Overview</h2>
        <p>Student Registration System summary</p>
      </div>

      <div className="dashboard-grid">
        {/* MAIN CARDS */}
        <div className="main-cards">
          {mainCards.map((card) => (
            <div key={card.id} className="dashboard-card">
              <div className="card-header">
                <div className="card-icon">{card.icon}</div>
                <span className="card-change">{card.change}</span>
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p className="card-value">
                  {card.value.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SECONDARY CARDS */}
        <div className="secondary-cards">
          {secondaryCards.map((card) => (
            <div key={card.id} className="dashboard-card secondary-card">
              <div className="card-icon-small">{card.icon}</div>
              <div>
                <h4>{card.title}</h4>
                <p className="card-value-small">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="dashboard-actions">
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <button className="action-btn">
              <FaUserPlus /> Register Student
            </button>
            <button className="action-btn secondary">
              <FaUsers /> View Students
            </button>
            <button className="action-btn tertiary">
              <FaChartBar /> Generate Report
            </button>
          </div>

          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              <li>New student registered</li>
              <li>Monthly report generated</li>
              <li>Student profile updated</li>
              <li>Graduation list approved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
