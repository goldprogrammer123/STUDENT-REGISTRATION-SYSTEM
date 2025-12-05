//This new file is created to handle student registration including guardian details.
import { useState } from "react";

function RegisterStudent() {
  const [student, setStudent] = useState({
    // Student Details
    full_Name: "",
    student_Id: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    department: "",
    photo: null,//optional as we discussed
    // Guardian Details
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
//   console.log(student);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(student).forEach((key) => {
      formData.append(key, student[key]);
    });
//handle submit logic to send data to backend
    try {
      const res = await fetch("https://your-backend-api.com/students", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Student registered successfully!");
        setStudent({
          fullName: "",
          studentId: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          department: "",
          photo: null,
          guardianName: "",
          guardianRelation: "",
          guardianPhone: "",
          guardianEmail: "",
          guardianAddress: "",
        });
      } else {
        alert("Failed to register student, please try again with the correct informations.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering student.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-student-form">
      <h2>Student Details</h2>
      <input type="text" name="fullName" value={student.fullName} onChange={handleChange} placeholder="Full Name" required />
      <input type="text" name="studentId" value={student.studentId} onChange={handleChange} placeholder="Student ID" required />
      <input type="date" name="dob" value={student.dob} onChange={handleChange} required />
      <select name="gender" value={student.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input type="tel" name="phone" value={student.phone} onChange={handleChange} placeholder="Phone Number" />
      <input type="text" name="department" value={student.department} onChange={handleChange} placeholder="Department / Class" required />
      <input type="file" name="photo" onChange={handleChange} />

      <h2>Guardian Details</h2>
      <input type="text" name="guardianName" value={student.guardianName} onChange={handleChange} placeholder="Full Name" required />
      <input type="text" name="guardianRelation" value={student.guardianRelation} onChange={handleChange} placeholder="Relationship (Father/Mother/Guardian)" required />
      <input type="tel" name="guardianPhone" value={student.guardianPhone} onChange={handleChange} placeholder="Phone Number" required />
      <input type="email" name="guardianEmail" value={student.guardianEmail} onChange={handleChange} placeholder="Email" />
      <input type="text" name="guardianAddress" value={student.guardianAddress} onChange={handleChange} placeholder="Address" />

      <button type="submit">Register Student</button>
      <button type="reset" onClick={() => setStudent({
          fullName: "",
          studentId: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          department: "",
          photo: null,
          guardianName: "",
          guardianRelation: "",
          guardianPhone: "",
          guardianEmail: "",
          guardianAddress: "",
        })}>Clear</button>
    </form>
  );
}

export default RegisterStudent;
