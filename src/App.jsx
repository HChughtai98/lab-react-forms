import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import { useNavigate } from "react-router-dom";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setStudents((prevStudents) => {
            return [
              ...prevStudents,
              {
                students: students,
                fullName: fullName,
                image: image,
                phone: phone,
                email: email,
                program: program,
                graduationYear: graduationYear,
                graduated: graduated,
              },
            ];
          });
        }}
      >
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              name={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              name={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              name={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name={program}
              onChange={(event) => {
                setProgram(event.target.value);
              }}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name={graduationYear}
              onChange={(event) => {
                setGraduationYear(event.target.value);
              }}
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name={graduated}
              onChange={(event) => {
                console.log(setGraduated(event.target.checked));
              }}
              type="checkbox"
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
