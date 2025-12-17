import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "./AnnualReportPage.css";
import React from "react";

// Dummy data (later replace with backend API)
const studentsData = [
  { id: 1, year: "2021", gender: "Male", status: "Graduated" },
  { id: 2, year: "2021", gender: "Female", status: "Graduated" },
  { id: 3, year: "2022", gender: "Male", status: "Active" },
  { id: 4, year: "2022", gender: "Female", status: "Graduated" },
  { id: 5, year: "2023", gender: "Male", status: "Active" },
  { id: 6, year: "2023", gender: "Female", status: "Active" },
];

const COLORS = ["#4f46e5", "#ec4899"];

export default function AnnualReportPage() {
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredData = useMemo(() => {
    return selectedYear === "All"
      ? studentsData
      : studentsData.filter((s) => s.year === selectedYear);
  }, [selectedYear]);

  const stats = useMemo(() => {
    const total = filteredData.length;
    const male = filteredData.filter((s) => s.gender === "Male").length;
    const female = filteredData.filter((s) => s.gender === "Female").length;
    const graduated = filteredData.filter((s) => s.status === "Graduated").length;
    const active = filteredData.filter((s) => s.status === "Active").length;

    return { total, male, female, graduated, active };
  }, [filteredData]);

  const barData = [
    { name: "Active", value: stats.active },
    { name: "Graduated", value: stats.graduated },
  ];

  const pieData = [
    { name: "Male", value: stats.male },
    { name: "Female", value: stats.female },
  ];

  const downloadReport = () => {
    const reportText = `Annual Academic Report\n\nYear: ${selectedYear}\nTotal Students: ${stats.total}\nActive: ${stats.active}\nGraduated: ${stats.graduated}\nMale: ${stats.male}\nFemale: ${stats.female}`;

    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `academic-report-${selectedYear}.txt`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Annual Academic Report</h1>

      {/* Filter */}
      <div className="mb-6">
        <select
          className="p-2 rounded border"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">All Years</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">Total Students: {stats.total}</div>
        <div className="bg-white p-4 rounded shadow">Active: {stats.active}</div>
        <div className="bg-white p-4 rounded shadow">Graduated: {stats.graduated}</div>
        <div className="bg-white p-4 rounded shadow">Male / Female: {stats.male} / {stats.female}</div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Student Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Download */}
      <button
        onClick={downloadReport}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Download Report
      </button>
    </div>
  );
}
