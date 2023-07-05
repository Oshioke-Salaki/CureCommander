import "./Sidebar.css";
import { useParams } from "react-router-dom";

import logout from "./../assets/logout.svg";
import add from "./../assets/add.svg";
import logo from "./../assets/edsuLogo.svg";

// Non-active icons
import patientIcon from "./../assets/patients.svg";
import settingIcon from "./../assets/setting.svg";
import calenderIcon from "./../assets/calendar.svg";
// import addPatientIcon from "./../assets/calendar.svg";
import dashboardIcon from "./../assets/dashboard.svg";

// Active Icons
import dashboardActiveIcon from "./../assets/dashboardActive.svg";
import patientActiveIcon from "./../assets/patientsActive.svg";
import calenderActiveIcon from "./../assets/dashboardActive.svg";
import settingActiveIcon from "./../assets/dashboardActive.svg";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setActive(pathname.slice(5, pathname.lastIndexOf("/")));
    } else {
      setActive(pathname.substring(1));
    }
  }, [id, pathname]);

  const sidebarItems = [
    {
      title: "Dashboard",
      name: "dashboard",
      icon: dashboardIcon,
      activeIcon: dashboardActiveIcon,
      path: "/dashboard",
    },
    {
      title: "Calender",
      name: "calender",
      icon: calenderIcon,
      activeIcon: calenderActiveIcon,
      path: "/calender",
    },
    {
      title: "Patients",
      name: "patients",
      icon: patientIcon,
      activeIcon: patientActiveIcon,
      path: "/patients",
    },
    {
      title: "Settings",
      name: "settings",
      icon: settingIcon,
      activeIcon: settingActiveIcon,
      path: "/settings",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sideUp">
        <div className="sidebarLogo">
          <img src={logo} alt="" />
          <h3>
            Edo State
            <br /> University
          </h3>
        </div>
        {sidebarItems.map((item, i) => (
          <NavLink
            to={item.path}
            key={i}
            className={
              active === item.name ? "siderbarItem activeItem" : "siderbarItem"
            }
            onClick={() => {
              setActive(item.name);
            }}
          >
            <img
              src={active === item.name ? item.activeIcon : item.icon}
              alt=""
            />
            {item.title}
          </NavLink>
        ))}
        <NavLink
          //   to={item.path}
          className="addPatientBtn"
        >
          <img src={add} alt="" /> Add Patient
        </NavLink>
      </div>

      <div className="logOut">
        <img src={logout} alt="" />
        <h5>Log out</h5>
      </div>
    </div>
  );
}

export default Sidebar;
