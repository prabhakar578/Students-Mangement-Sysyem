import React, { useEffect, useState } from 'react'
import Student from '../Components/Student'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  const [students, setStudent] = useState([])
  const [toggle, SetToggle] = useState(false)

  async function getStudents() {
    let res = await axios.get("https://student-mangement-sysyem.onrender.com/students")
    setStudent(res.data)
  }

  useEffect(() => {
    getStudents()
  }, [toggle])

  return (
    <div>
      <h1 className='bg-warning text-center py-1'>
        Student Management
      </h1>
           <div className='text-center mb-2'>
            <Link className='btn btn-dark' to={"/create"}>Add Student</Link>
            </div>
      <div className="container">
        <div className="row">
          {students.map((student) => (
            <div className="col-md-4 mb-4" key={student.id}>
              <Student
                std={student}
                toggle={toggle}
                SetToggle={SetToggle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home