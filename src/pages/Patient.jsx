import "./Patient.css";
import filter from "./../assets/filter.svg";
import { useState } from "react";
import { patients } from "./../patients";

import { NavLink } from "react-router-dom";
function Patient() {
  const [curPage, setCurPage] = useState(1);
  return (
    <div className="patientPage">
      <div className="patientPageTop">
        <h1>Patient List</h1>
        <button>
          Filter <img src={filter} alt="" />
        </button>
      </div>
      <table className="patientsTable">
        <thead>
          <tr>
            <th>Mat. Number</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Department</th>
            {/* <th>Date of Birth</th> */}
            <th>Blood Group</th>
            <th>Year of Admission</th>
          </tr>
        </thead>
        <tbody>
          {patients.slice((curPage - 1) * 10, curPage * 10).map((p) => (
            <tr key={p.studentId}>
              <NavLink to={`/patients/:${p.studentId}`} className="Navlink">
                <td>{p.matNumber}</td>
              </NavLink>
              <td>
                {p.studentName.length <= 20
                  ? p.studentName
                  : p.studentName.slice(0, 20) + "..."}
              </td>
              <td>{p.gender === "male" ? "M" : "F"}</td>
              <td>{p.department.slice(0, 15) + "..."}</td>
              <td>{p.bloodGroup}</td>
              <td>{p.yearOfAddmission}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tableNav">
        <h6>Showing 10 from {patients.length} data</h6>
        <div className="pages">
          <span
            onClick={() => setCurPage((cur) => (cur === 1 ? cur : cur - 1))}
          >
            {"< Previous"}
          </span>
          <a
            href="#"
            className={curPage === 1 && "activePage"}
            onClick={() => setCurPage(1)}
          >
            1
          </a>
          <a
            href="#"
            className={curPage === 2 && "activePage"}
            onClick={() => setCurPage(2)}
          >
            2
          </a>
          <a
            href="#"
            className={curPage === 3 && "activePage"}
            onClick={() => setCurPage(3)}
          >
            3
          </a>
          <a
            href="#"
            className={curPage === 4 && "activePage"}
            onClick={() => setCurPage(4)}
          >
            4
          </a>
          <span
            onClick={() => setCurPage((cur) => (cur === 4 ? cur : cur + 1))}
          >
            {"Next >"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Patient;
