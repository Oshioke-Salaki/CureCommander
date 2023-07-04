import "./Navbar.css";
import searchIcon from "./../assets/search.svg";
import notificationIcon from "./../assets/notification.svg";
import av from "./../assets/av.svg";
function Navbar() {
  return (
    <div className="topBanner">
      <div className="search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="navRight">
        <img src={notificationIcon} alt="" className="notification" />
        <img src={av} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
