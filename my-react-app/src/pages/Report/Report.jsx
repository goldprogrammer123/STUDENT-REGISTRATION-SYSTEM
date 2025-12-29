import React, { useEffect, useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import "./Report.css";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Report = () => {
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);
  const [lineData, setLineData] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const barResponse = await fetch("http://127.0.0.1:8000/students/count/");
        const pieResponse = await fetch("http://127.0.0.1:8000/students/count-male/");
        const lineResponse = await fetch("http://127.0.0.1:8000/students/count-female/");

        const barChartData = await barResponse.json();
        const pieChartData = await pieResponse.json();
        const lineChartData = await lineResponse.json();

        setBarData({
          labels: ["Total Students"],
          datasets: [
            {
              label: "Total",
              data: [barChartData.count],
              backgroundColor: "#007bff",
            },
          ],
        });

        setPieData({
          labels: ["Male", "Female"],
          datasets: [
            {
              data: [pieChartData.count, lineChartData.count],
              backgroundColor: ["#007bff", "#ffc107"],
            },
          ],
        });

        setLineData({
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              label: "Attendance Rate (%)",
              data: [85, 90, 88, 92], // Mock data for now
              borderColor: "#007bff",
              backgroundColor: "rgba(0, 123, 255, 0.2)",
              fill: true,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchReportData();
  }, []);

  if (!barData || !pieData || !lineData) {
    return <p>Loading reports...</p>;
  }

  return (
    <div className="report-container">
      <h2>Reports</h2>
      <p>Visual representation of student data</p>

      <div className="chart-section">
        <div className="chart-card">
          <h3>Monthly Student Data</h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>

        <div className="chart-card">
          <h3>Course Distribution</h3>
          <Pie data={pieData} options={{ responsive: true }} />
        </div>

        <div className="chart-card">
          <h3>Weekly Attendance</h3>
          <Line data={lineData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Report;
