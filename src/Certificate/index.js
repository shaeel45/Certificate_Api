import React from "react";
import "./user.style.css";
import vector9 from '../Images/Vector 9.png'
import vector6 from '../Images/Vector 6.png'
import line5 from '../Images/Line 5.png'
import vector8 from '../Images/Vector 8.png'
import vector7 from '../Images/Vector 7.png'
import logo from '../Images/logo (1).png'
import polygon1 from '../Images/Polygon 1.png'
import polygon2 from '../Images/Polygon 2.png'
import rectangle from '../Images/Rectangle 6.png'
import vector5 from '../Images/Vector 5.png'
import line6 from '../Images/Line 6.png'

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src={vector7} />
            <img className="img" alt="Vector" src={vector8} />
            <img className="line" alt="Line" src={line5} />
            <img className="vector-2" alt="Vector" src={vector9} />
            <img className="vector-3" alt="Vector" src={vector6} />
            <img className="logo" alt="Logo" src={logo} />
            {/* <div className="text-wrapper">CERTIFICATE</div> */}
            {/* <p className="in-recognition-of">
              In recognition of your valued participation in the online <br />
              webinar on “Kick Start your career as a Penetration Tester”
              <br />
              held on 9 September 2024
            </p> */}
            {/* <div className="appreciation">
              <div className="div">
                <div className="text-wrapper-2">OF APPRECIATION</div>
                <img className="line-2" alt="Line" src="line-7.svg" />
              </div>
            </div> */}
            <img className="line-3" alt="Line" src="line-8.svg" />
            {/* <div className="areesha-lead">
              <div className="overlap-2">
                <div className="text-wrapper-3">Areesha Siddiqui</div>
                <div className="text-wrapper-4">(LEAD)</div>
                <img className="line-4" alt="Line" src="line-9.svg" />
              </div>
            </div> */}
            <img className="rectangle" alt="Rectangle" src={rectangle} />
            <img className="polygon" alt="Polygon" src={polygon1} />
            <img className="polygon-2" alt="Polygon" src={polygon2} />
            <img className="vector-4" alt="Vector" src={vector5} />
            <img className="line-5" alt="Line" src={line6} />
          </div>
          {/* <p className="p">This Certificate is presented to</p>
          <div className="hamzah-lead">
            <div className="overlap-3">
              <div className="text-wrapper-3">Hamzah Wahab</div>
              <div className="text-wrapper-5">(LEAD)</div>
              <img className="line-6" alt="Line" src="line-10.svg" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
