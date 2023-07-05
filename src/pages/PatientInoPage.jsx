import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { patients } from "./../patients";
import "./patientInoPage.css";
import banner from "./../assets/patientBack.png";
import av from "./../assets/patientAv.svg";
import photo from "./../assets/photo.svg";
import { useState } from "react";

function PatientInoPage() {
  const { id } = useParams();
  const [curPatient] = patients.filter((p) => p.studentId == id.slice(1));
  const [curTab, setCurTab] = useState("new");

  return (
    <div className="patientInfoPage">
      <div
        className="patientBanner"
        style={{
          background: `url(${banner}) no-repeat center center/ cover `,
        }}
      ></div>
      <div className="patientInfoPageMain">
        <div className="patientBasicInfo">
          <a className="patientEditBtn">Edit</a>
          <div className="patientImg">
            <img src={av} alt="" />
            <img src={photo} alt="" />
          </div>
          <p>
            <span>Name: </span>
            {curPatient.studentName}
          </p>
          <p>
            <span>Gender: </span>
            {curPatient.gender}
          </p>
          <p>
            <span>Depatment: </span>
            {curPatient.department}
          </p>
          <p>
            <span>Mat. Number: </span>
            {curPatient.matNumber}
          </p>
          <p>
            <span>Hostel: </span>
            {curPatient.hostel}
          </p>
          <p>
            <span>Blood Group: </span>
            {curPatient.bloodGroup}
          </p>
          <p>
            <span>Year of admission: </span>
            {curPatient.yearOfAddmission}
          </p>
        </div>
        <div className="patientPast">
          <div className="patientPastNav">
            <a
              href="#"
              onClick={() => setCurTab("new")}
              //   style={
              //     curTab === "new" && { color: "#2771d9", fontWeight: "600" }
              //   }
            >
              New Record
            </a>
            <a
              href="#"
              onClick={() => setCurTab("past")}
              //   style={
              //     curTab === "past" && { color: "#2771d9", fontWeight: "600" }
              //   }
            >
              Past Record
            </a>
            <a
              href="#"
              onClick={() => setCurTab("med")}
              //   style={
              //     curTab === "med" && { color: "#2771d9", fontWeight: "600" }
              //   }
            >
              Medications
            </a>
          </div>
          {/* New Record */}
          {curTab === "new" && (
            <>
              <h2>Case Information</h2>
              <div className="cases">
                <div className="case">
                  <h5>Acute</h5>
                  <input type="checkbox" />
                </div>
                <div className="case">
                  <h5>Chronic</h5>
                  <input type="checkbox" />
                </div>
                <div className="case">
                  <h5>Pre-exisiting</h5>
                  <input type="checkbox" />
                </div>
                <div className="case">
                  <h5>Injury</h5>
                  <input type="checkbox" />
                </div>
              </div>
              <form className="newRecordForm">
                <div className="formControl">
                  <label>Symptoms</label>
                  <input type="text" placeholder="Type symptoms" />
                </div>
                <div className="formControl">
                  <label>Diagnosis</label>
                  <input type="text" placeholder="Type a diagnosis" />
                </div>
                <div className="formControl">
                  <label>Remarks</label>
                  <input type="textarea" placeholder="Type remarks" />
                </div>
                <button>Save</button>
              </form>{" "}
            </>
          )}
          {/* Past Record */}
        </div>
      </div>
    </div>
  );
}

export default PatientInoPage;
