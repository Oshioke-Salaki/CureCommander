import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Layout.css";
function Layout() {
  return (
    <div className="dash">
      <Sidebar />
      <div className="dashMain">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
