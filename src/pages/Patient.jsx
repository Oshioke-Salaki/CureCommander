import "./Patient.css";
import filter from "./../assets/filter.svg";

function Patient() {
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
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Date Check In</th>
            <th>Doctor Assigned</th>
            <th>Disease</th>
            <th>Status</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#A-122014</td>
            <td>Kevin Ameh Otobo</td>
            <td>26 Jan 2023</td>
            <td>Dr. Kimberly</td>
            <td>Cold and Flu</td>
            <td>Admitted</td>
            <td>27</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Patient;
