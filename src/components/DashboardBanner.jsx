import banner from "./../assets/banner.png";
import "./DashboardBanner.css";

function DashboardBanner() {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    // backgroundSize: "cover",
    width: " 62rem",
    backgroundRepeat: "no-repeat",
    height: "12.8rem",
    // paddingTop: "2.9rem",
    paddingLeft: "15.1rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "1rem",
  };
  return (
    <div style={bannerStyle} className="dashboardBanner">
      <h2>Good Morning Doctor</h2>
      <p>You have 7 patients remaining today!</p>
      <p>Remember you to record your details today</p>
    </div>
  );
}

export default DashboardBanner;
