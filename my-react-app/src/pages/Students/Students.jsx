import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../../component/Navbar/Navbar.jsx";
import "./Students.css";

const Students = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [filters, setFilters] = useState({ course: "", year: "", gender: "" });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/students/");
        const data = await response.json();
        setStudentsData(data);
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    return studentsData.filter((student) => {
      return (
        (filters.course === "" || student.course === filters.course) &&
        (filters.year === "" || student.year === filters.year) &&
        (filters.gender === "" || student.gender === filters.gender)
      );
    });
  }, [filters, studentsData]);

  const stats = {
    total: filteredStudents.length,
    active: filteredStudents.filter((s) => s.status === "Active").length,
    male: filteredStudents.filter((s) => s.gender === "Male").length,
    female: filteredStudents.filter((s) => s.gender === "Female").length,
  };

  return (
    <div className="students-page">
      <Navbar />
      <div className="container">
        <h1 className="page-title">Students Management</h1>

        {/* Summary Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Students</h3>
            <p>{stats.total}</p>
          </div>
          <div className="stat-card">
            <h3>Active Students</h3>
            <p>{stats.active}</p>
          </div>
          <div className="stat-card">
            <h3>Male</h3>
            <p>{stats.male}</p>
          </div>
          <div className="stat-card">
            <h3>Female</h3>
            <p>{stats.female}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <select onChange={(e) => setFilters({ ...filters, course: e.target.value })}>
            <option value="">All Courses</option>
            <option value="Computer Science">Computer Science</option>
            <option value="IT">IT</option>
            <option value="Business">Business</option>
          </select>
          <select onChange={(e) => setFilters({ ...filters, year: e.target.value })}>
            <option value="">All Years</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <select onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Students Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Year</th>
                <th>Gender</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.year}</td>
                    <td>{student.gender}</td>
                    <td>
                      <span className={`status ${student.status.toLowerCase()}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;