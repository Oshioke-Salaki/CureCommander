import "./Navbar.css";
import searchIcon from "./../assets/search.svg";
import notificationIcon from "./../assets/notification.svg";
import av from "./../assets/av.svg";
import message from "./../assets/messages.svg";
function Navbar() {
  return (
    <div className="topBanner">
      <div className="search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search for patients, mat. number" />
      </div>
      <div className="navRight">
        <img src={message} alt="" />
        <img src={notificationIcon} alt="" className="notification" />
        <div className="avatar">
          <img src={av} alt="" className="avatar" />
          <div className="avatarDet">
            <h5>Oshioke Salaki</h5>
            <h6>Doctor</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
