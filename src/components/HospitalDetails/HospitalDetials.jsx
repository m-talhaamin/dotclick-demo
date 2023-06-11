import "./hospitalDetails.scss";
const HospitalDetials = () => {
  return (
    <div className="details">
      <div className="hospitalDetails">
        <h3>St Judes Hospital</h3>
        <p>Sarasota,FL. 33178</p>
      </div>
      <div className="datesDetail">
        <h3>
          10 <span>-</span> 17
        </h3>
        <span className="startDate">October</span>
        <span className="endDate">December</span>
      </div>
      <div className="roomsDetail">
        <h3>20 Rooms</h3>
        <p>10 Singles, 10 doubles</p>
      </div>
    </div>
  );
};

export default HospitalDetials;
