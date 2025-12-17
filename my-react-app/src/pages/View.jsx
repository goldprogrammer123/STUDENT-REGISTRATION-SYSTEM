import { useState } from "react";
import "./app.css";
//if necessary to add another course filter, just update the options in the select dropdown and the filtering logic will handle it automatically
export default function StudentsPage() {
  const studentsData = [
    { id: 1, name: "John Doe", course: "Computer Science", year: "2023", gender: "Male", status: "Active" },
    { id: 2, name: "Asha Ali", course: "Information Technology", year: "2022", gender: "Female", status: "Graduated" },
    { id: 3, name: "Michael John", course: "Business", year: "2023", gender: "Male", status: "Active" },
    { id: 4, name: "Neema Paul", course: "Computer Science", year: "2021", gender: "Female", status: "Graduated" },
  ];
//state to hold filter values according to course, year, and gender
  const [filters, setFilters] = useState({ course: "", year: "", gender: "" });

  const filteredStudents = studentsData.filter((student) => {
    return (
      (filters.course === "" || student.course === filters.course) &&
      (filters.year === "" || student.year === filters.year) &&
      (filters.gender === "" || student.gender === filters.gender)
    );
  });

  const totalStudents = studentsData.length;
  const activeStudents = studentsData.filter((s) => s.status === "Active").length;
  const maleStudents = studentsData.filter((s) => s.gender === "Male").length;
  const femaleStudents = studentsData.filter((s) => s.gender === "Female").length;

  return (
    <div className="students-page">
      <h1>Students Overview</h1>

      {/* STATS CARDS */}
      <div className="stats-cards">
        <div className="card">Total Students <span>{totalStudents}</span></div>
        <div className="card">Active Students <span>{activeStudents}</span></div>
        <div className="card">Male Students <span>{maleStudents}</span></div>
        <div className="card">Female Students <span>{femaleStudents}</span></div>
      </div>

      {/* FILTER SECTION */}
      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, course: e.target.value })}>
          <option value="">All Courses</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Business">Business</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, year: e.target.value })}>
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* STUDENTS LIST */}
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Year</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.year}</td>
              <td>{student.gender}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
