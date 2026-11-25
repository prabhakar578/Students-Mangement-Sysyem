
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

  let navigate = useNavigate()
  let { id } = useParams()

  let [std, setstd] = useState({})

  let [name, setName] = useState("")
  let [age, setAge] = useState("")
  let [rollnumber, setRollnumber] = useState("")
  let [course, setCourse] = useState("")
  let [marks, setMarks] = useState("")
  let [isPresent, setIsPresent] = useState(false)

  async function getStudent() {
    let res = await axios.get("https://student-mangement-sysyem.onrender.com/students" + id)

    setstd(res.data)

    setName(res.data.name)
    setAge(res.data.age)
    setRollnumber(res.data.rollnumber)
    setCourse(res.data.course)
    setMarks(res.data.marks)
    setIsPresent(res.data.ispresent)
  }

  useEffect(() => {
    getStudent()
  }, [id])

  async function handleSubmit(e) {
    e.preventDefault()

    if (
      name.trim() === "" ||
      age === "" ||
      rollnumber === "" ||
      course === "" ||
      marks === ""
    ) {
      alert("Please fill all the fields")
      return
    }

    let student = {
      name: name,
      age: age,
      rollnumber: rollnumber,
      course: course,
      marks: marks,
      ispresent: isPresent
    }

    await axios.put("http://localhost:3000/students/" + id, student)

    alert("Student updated successfully")
    navigate("/")
  }

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">

          <div className="card shadow border-0">

            <div className="card-header bg-warning text-center py-2">
              <h2 className="mb-0">Edit Student</h2>
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
                      type="number"
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
                      value={isPresent.toString()}
                      onChange={(e) => setIsPresent(e.target.value === "true")}
                    >
                      <option value="true">Present</option>
                      <option value="false">Absent</option>
                    </select>
                  </div>

                </div>

                <div className="text-center mt-3">

                  <button type="submit" className="btn btn-success px-4 me-2">
                    Update Student
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary px-4"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Edit
