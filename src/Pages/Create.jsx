
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  let navigate = useNavigate()

  let [name, setName] = useState("")
  let [age, setAge] = useState("")
  let [rollnumber, setRollnumber] = useState("")
  let [course, setCourse] = useState("")
  let [marks, setMarks] = useState("")
  let [ispresent, setIspresent] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (
      name.trim() === "" ||
      age.trim() === "" ||
      rollnumber.trim() === "" ||
      course.trim() === "" ||
      marks.trim() === "" ||
      ispresent === ""
    ) {
      alert("Please fill all the fields")
      return
    }

    let student = {
      name: name,
      age: Number(age),
      rollnumber: rollnumber,
      course: course,
      marks: Number(marks),
      ispresent: ispresent === "true"
    }

    async function addStudent() {
      await axios.post("http://localhost:3000/students", student)

      alert("Student added successfully!")
      navigate("/")
    }

    addStudent()
  }

  return (
    <div className="container d-flex justify-content-center mt-4 mb-4">

      <div className="card shadow border-0" style={{ width: "550px" }}>

        <div className="card-header bg-warning text-center">
          <h4 className="mb-0">Add Student</h4>
        </div>

        <div className="card-body p-4">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Roll Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter roll number"
                  value={rollnumber}
                  onChange={(e) => setRollnumber(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Course</label>
                <select
                  className="form-select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Marks</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter marks"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Attendance</label>
                <select
                  className="form-select"
                  value={ispresent}
                  onChange={(e) => setIspresent(e.target.value)}
                >
                  <option value="">Select Attendance</option>
                  <option value="true">Present</option>
                  <option value="false">Absent</option>
                </select>
              </div>

            </div>

            <div className="d-flex justify-content-center gap-2 mt-3">

              <button type="submit" className="btn btn-success px-4">
                Add Student
              </button>

              <button
                type="reset"
                className="btn btn-secondary px-4"
                onClick={() => {
                  setName("")
                  setAge("")
                  setRollnumber("")
                  setCourse("")
                  setMarks("")
                  setIspresent("")
                }}
              >
                Reset
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
