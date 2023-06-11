import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContent">
        <div className="logoWrp">
          <h3>LODGN</h3>
        </div>
        <div className="navLinks">
          <div className="topLinks">
            <div className="navHeading">
              <h6>Current requests</h6>
            </div>
            <ul>
              <li>
                <a href="#">Ongoing stays</a>
              </li>
              <li>
                <a href="#">Previous stays</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
            </ul>
          </div>
          <div className="bottomLinks">
            <div className="btnwrp">
                <button type="button">Log - Out</button>
            </div>
            <div className="txtwrp">
                <p>Help-Desk:</p>
                <p>786-874 9988</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
