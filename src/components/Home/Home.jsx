import React from "react";
import HomeContent from "../HomeContent/HomeContent";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <div uk-grid="">
        <div className="uk-width-auto@m">
            <Sidebar />
        </div>
        <div className="uk-width-expand@m uk-padding-remove-left">
            <HomeContent />
        </div>
      </div>
    </>
  );
};

export default Home;
