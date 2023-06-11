import './detailBox.scss';
import logo from "../../assets/images/logo.png";

const DetailBox = () => {
  return (
    <div className="detailBox">
      <div className="detailBoxContent">
        <div className="imgwrp">
          <img src={logo} alt="logo" />
        </div>
        <div className="txtwrp">
          <h3>Holiday Inn</h3>
        </div>
        <div className="detailInner">
          <div className="txtdiv">
            <p>1.5 miles away from joblocation.</p>
          </div>
          <div className="priceAndBtn">
            <div className="prices">
              <p>Singles: $120</p>
              <p>Doubles: $145</p>
            </div>
            <div className="btnwrp">
              <button type="button">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
