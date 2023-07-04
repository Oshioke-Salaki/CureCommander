import DashboardBanner from "../components/DashboardBanner";
import GenderChart from "../components/GenderChart";
import NumPatientsChart from "../components/NumPatientsChart";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashLeft">
        <DashboardBanner />
        <div className="dashboardAnalytics">
          <div className="analyticsTop">
            <h2>Number of patients</h2>
            <select className="analyticsFilter">
              <option value="lastWeek">Last Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="lastWeek">Last Week</option>
            </select>
          </div>
          <NumPatientsChart />
        </div>
      </div>
      <div className="dashLeft">
        <div className="genderAnalytics">
          <h2>Gender</h2>
          <GenderChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
