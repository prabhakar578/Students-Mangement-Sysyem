import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Student = (props) => {
  function handleDelete(stdId) {
    async function deletestd() {
      await axios.delete(`https://student-mangement-sysyem.onrender.com/students/${stdId}`);

      props.SetToggle(!props.toggle);
    }

    deletestd();
  }

  return (
    <div>
      <div className="card shadow-lg" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name : {props.std.name}</h5>

          <p className="card-text">Course : {props.std.course}</p>
          <p className="card-text">Age : {props.std.age}</p>
          <p className="card-text">Roll : {props.std.rollnumber}</p>
          <p className="card-text">Marks : {props.std.marks}</p>

          {props.std.ispresent ? (
            <span className="badge bg-success">Present</span>
          ) : (
            <span className="badge bg-danger">Absent</span>
          )}

          <div className="d-flex gap-2 mt-2">
            <Link
              className="btn btn-primary btn-sm"
              to={`/view/${props.std.id}`}
            >
              View
            </Link>

            <Link to={`/edit/${props.std.id}`} className="btn btn-info btn-sm">
              Edit
            </Link>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(props.std.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
