import React, { useState } from "react";
import { FaUser, FaPhone, FaBook, FaCalendarAlt, FaUserTie, FaVenusMars } from "react-icons/fa";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    course: "",
    yearOfRegistration: "",
    guardian: "",
    gender: "",
  });

  const courses = ["Computer Science", "Mathematics", "Physics", "Biology", "Chemistry"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/students/profile-create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Student registered successfully!");
        setFormData({
          fullName: "",
          phoneNumber: "",
          course: "",
          yearOfRegistration: "",
          guardian: "",
          gender: "",
        });
      } else {
        alert("Failed to register student.");
      }
    } catch (error) {
      console.error("Error registering student:", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register Student</h2>
      <p>Fill in the details below to register a new student.</p>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <FaUser className="icon" /> Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FaPhone className="icon" /> Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FaBook className="icon" /> Course
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>
            <FaCalendarAlt className="icon" /> Year of Registration
          </label>
          <input
            type="number"
            name="yearOfRegistration"
            value={formData.yearOfRegistration}
            onChange={handleChange}
            placeholder="Enter year"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FaUserTie className="icon" /> Guardian Name
          </label>
          <input
            type="text"
            name="guardian"
            value={formData.guardian}
            onChange={handleChange}
            placeholder="Enter guardian name"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FaVenusMars className="icon" /> Gender
          </label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                required
              />
              Female
            </label>
          </div>
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
