import React from "react";
import "./PopularPage.css";
import icon from "../../components/assets/resort.png";
import icons from "../../components/assets/holiday.png";

function PopularPage() {
  return (
    <div className="PopularPage">
      {/* <div className="Main-class">
       <div className="sub-rec1"></div> 
       <div className="sub-rec2"></div>
       <div className="sub-rec3"></div>
       <div className="sub-rec4"></div> 
      </div> */}
      <div className="Sub-Div">
        <div className="iconBox">
          <img src={icon} alt="icon" />

          <div className="iconBox2">
            <img src={icons} alt="icons" />
            </div>
          </div>
          {/* <div id="container">
            <button id="myButton">Search</button>
          </div> */}
      </div>

      </div>

      );
}

      export default PopularPage;