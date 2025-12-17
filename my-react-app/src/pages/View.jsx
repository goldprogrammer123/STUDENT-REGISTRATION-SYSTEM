import { useState, useMemo } from "react";
import "./StudentsPage.css";

const studentsData = [
    { id: 1, name: "John Doe", course: "Computer Science", year: "2023", gender: "Male", status: "Active" },
    { id: 2, name: "Asha Ali", course: "Information Technology", year: "2022", gender: "Female", status: "Graduated" },
    { id: 3, name: "Michael John", course: "Business", year: "2023", gender: "Male", status: "Active" },
    { id: 4, name: "Neema Paul", course: "Computer Science", year: "2021", gender: "Female", status: "Graduated" },
    { id: 5, name: "Peter Lucas", course: "Business", year: "2022", gender: "Male", status: "Active" },
  ];
export default function StudentsPage() {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({ course: "", year: "", gender: "" });

    const filteredStudents = useMemo(() => {
    return studentsData.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchCourse = filters.course === "" || s.course === filters.course;
      const matchYear = filters.year === "" || s.year === filters.year;
      const matchGender = filters.gender === "" || s.gender === filters.gender;
      return matchSearch && matchCourse && matchYear && matchGender;
    });
  }, [search, filters,]);

  const stats = useMemo(() => {
    return {
      total: filteredStudents.length,
      active: filteredStudents.filter((s) => s.status === "Active").length,
      male: filteredStudents.filter((s) => s.gender === "Male").length,
      female: filteredStudents.filter((s) => s.gender === "Female").length,
    };
  }, [filteredStudents]);

  return (
    <div className="students-page">
      <h1 className="page-title">Students Overview</h1>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Students</p>
          <h2>{stats.total}</h2>
        </div>
        <div className="stat-card">
          <p>Active Students</p>
          <h2>{stats.active}</h2>
        </div>
        <div className="stat-card">
          <p>Male Students</p>
          <h2>{stats.male}</h2>
        </div>
        <div className="stat-card">
          <p>Female Students</p>
          <h2>{stats.female}</h2>
        </div>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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

      {/* TABLE */}
      <div className="table-wrapper">
        <table>
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
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-data">No students found</td>
              </tr>
            ) : (
              filteredStudents.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.course}</td>
                  <td>{s.year}</td>
                  <td>{s.gender}</td>
                  <td className={s.status === "Active" ? "active" : "graduated"}>{s.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
