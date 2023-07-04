import "./StatCard.css";
// import appt from "./../assets/users.svg";
import users from "./../assets/users.svg";
import bag from "./../assets/bag.svg";

function StatCard({ color, title, number, increase, type }) {
  return (
    <div className="statCard">
      <div className="statImg" style={{ backgroundColor: color }}>
        <img src={type === "M" ? bag : users} alt="" />
      </div>
      <div className="statCardMain">
        <h3>{title}</h3>
        <h2>{number}</h2>
        <div className="increase">
          <div style={{ backgroundColor: color, width: `${increase}%` }}></div>
        </div>
        <p>{increase}% increase in 30 days</p>
      </div>
    </div>
  );
}

export default StatCard;
