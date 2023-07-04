import Calender from "../components/Calender";
import DashboardBanner from "../components/DashboardBanner";
import GenderChart from "../components/GenderChart";
import NumPatientsChart from "../components/NumPatientsChart";
import RecentPatients from "../components/RecentPatients";
import StatCard from "../components/StatCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashLeft">
        <DashboardBanner />
        <div
          className="dashStats"
          style={{ display: "flex", gap: "1.9rem", marginTop: "2rem" }}
        >
          <StatCard
            color="#6800e2"
            title="Appointment"
            number={30}
            increase={45}
            type="M"
          />
          <StatCard
            color="#FA8E2B"
            title="Total Patients"
            number={45}
            increase={20}
            type="U"
          />
          <StatCard
            color="#0014B2"
            title="New Patients"
            number={30}
            increase={60}
            type="M"
          />
        </div>
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
        <RecentPatients />
      </div>
      <div className="dashLeft">
        <div className="genderAnalytics">
          <h2>Gender</h2>
          <GenderChart />
        </div>
        <Calender />
      </div>
    </div>
  );
}

export default Dashboard;
