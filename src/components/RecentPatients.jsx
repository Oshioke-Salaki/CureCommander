import "./RecentPatients.css";
import add from "./../assets/add.svg";
import trash from "./../assets/trash.svg";
import edit from "./../assets/edit.svg";
function RecentPatients() {
  return (
    <div className="recentPatients">
      <div className="recentPatientsTop">
        <div className="rpTopLeft">
          <h2>Recent Patients</h2>
          <select value="today">
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="today">Last Week</option>
          </select>
        </div>
        <div className="rpTopRight">
          <h4>
            <img src={add} alt="" />
            Add Patient
          </h4>
          <h5>View All</h5>
        </div>
      </div>
      <table className="recentPatientsTable">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date In</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kevin Ameh Otobo</td>
            <td>04/06/23</td>
            <td>Male</td>
            <td>21</td>
            <td>Malaria</td>
            <td>Confirmed</td>
            <td className="actions">
              <img src={trash} alt="" />
              <img src={edit} alt="" />
            </td>
          </tr>
          <tr>
            <td>Kevin Ameh Otobo</td>
            <td>04/06/23</td>
            <td>Male</td>
            <td>21</td>
            <td>Malaria</td>
            <td>Confirmed</td>
            <td className="actions">
              <img src={trash} alt="" />
              <img src={edit} alt="" />
            </td>
          </tr>
          <tr>
            <td>Kevin Ameh Otobo</td>
            <td>04/06/23</td>
            <td>Male</td>
            <td>21</td>
            <td>Malaria</td>
            <td>Confirmed</td>
            <td className="actions">
              <img src={trash} alt="" />
              <img src={edit} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentPatients;
