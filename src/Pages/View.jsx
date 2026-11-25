
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const View = () => {

  let { id } = useParams();

  let [std, Setstd] = useState({});

  async function StudentData() {
    try {
      let res = await axios.get(`http://localhost:3000/students/${id}`);
      Setstd(res.data);
    } catch (error) {
      console.log("Error fetching student:", error);
    }
  }

  useEffect(() => {
    StudentData();
  }, [id]);

  return (
    <div className="container mt-4">

      <div className="card shadow-lg">

        {/* Card Header */}
        <div className="card-header">
          {std.name}
        </div>

        {/* Card Body */}
        <div className="card-body">

          <h5 className="card-title">
            Name : {std.name}
          </h5>

          <p className="card-text">
            ID : {std.id}
          </p>

          <p className="card-text">
            Roll Number : {std.rollnumber}
          </p>

          <p className="card-text">
            Age : {std.age}
          </p>

          <p className="card-text">
            Course : {std.course}
          </p>

          <p className="card-text">
            Marks : {std.marks}
          </p>

          {/* Attendance and Home Button */}
          <div className="d-flex align-items-center gap-2 mt-3">

            {std.ispresent ? (
              <span className="badge bg-success">
                Present
              </span>
            ) : (
              <span className="badge bg-danger">
                Absent
              </span>
            )}

            <Link to="/" className="btn btn-warning btn-sm">
              Home
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
};

export default View;
