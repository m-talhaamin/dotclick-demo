import HospitalDetials from "../HospitalDetails/HospitalDetials";
import "./HomeContent.scss";
import DetailBox from "../DetailBox/DetailBox";

const HomeContent = () => {
  return (
    <div className="homeContent">
      <div className="homeContentWrp">
        <div className="headingWrp">
          <h3>You currently have 3 requests</h3>
        </div>
        <div uk-grid="">
          <div className="uk-width-1-1">
            <div className="box">
              <div className="boxContent">
                <HospitalDetials />
                <div className="progressBar">
                  <div className="progressBarContent">
                    <div className="received">
                      <span>RECEIVED</span>
                    </div>
                    <div className="negotiating">
                      <span>NEGOTIATING</span>
                    </div>
                    <div className="completed">
                      <span>COMPLETED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-width-1-1">
            <div className="box">
              <div className="boxContent" style={{borderRadius: "54px"}}>
                <HospitalDetials />
                <div className="fullProgressBar">
                  <div className="fullProgressBarContent">
                    <div className="completed">
                      <span>COMPLETED</span>
                    </div>
                  </div>
                </div>
                <div uk-grid="">
                  <div className="uk-width-1-3">
                    <DetailBox />
                  </div>
                  <div className="uk-width-1-3">
                    <DetailBox />
                  </div>
                  <div className="uk-width-1-3">
                    <DetailBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
