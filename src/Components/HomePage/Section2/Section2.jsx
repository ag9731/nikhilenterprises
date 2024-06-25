import React from "react";
import "./Section2.css";
import { AiFillSetting } from "react-icons/ai";
import {
  FaHandshake,
  FaGlobe,
  FaHandHoldingWater,
  FaHandRock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Section2 = () => {
  
  return (
    <div className="section2Main">
      {/* Row 1 */}

      <div className="section2First">
        <div className="Firsttop">
          <FaHandshake className="AboutIconBlack" />
          <h3
            style={{
              textTransform: "uppercase",
              fontWeight: "900",
              textAlign: "center",
              color: "#001E57",
              letterSpacing: "2px",
            }}
          >
            Commitment to Quality
          </h3>
          <p style={{ fontWeight: 600 }}>
            Ensuring high standards in design and performance.
          </p>
        </div>

        <div className="Firstbottom">
          <FaGlobe className="AboutIconBlack" />
          <h3
            style={{
              textTransform: "uppercase",
              fontWeight: "900",
              textAlign: "center",
              letterSpacing: "2px",
              color: "#001E57",
            }}
          >
            Comprehensive Solutions
          </h3>
          <p style={{ fontWeight: 600 }}>
            Offering full service from raw material to customer support.
          </p>
        </div>
      </div>

      {/* Row 2 */}

      <div className="section2Second">
        <img src="./images/NikhilEnterprisers.webp" alt="" />
        <Link to="/contact">
           <button className="btn23">CONTACT US</button>
        </Link>
      </div>

      {/* Row 3 */}

      <div className="section2Third">
        <div className="Thirdtop">
          <h1
            style={{
              fontWeight: 700,
              fontSize: "3.2em",
              letterSpacing: "2px",
              paddingRight: "20px",
            }}
          >
            <span style={{ fontWeight: 900, color: "#031F57" }}>WHY </span>
            CHOOSE US
            <span style={{ fontWeight: 700, color: "#ffb200" }}> ?</span>
          </h1>
          <p style={{ fontWeight: 600 }}>
            For Nikhil Enterprises, choosing excellence and innovation means
            optimizing commercial environments. Experience unmatched quality and
            performance in air management.
          </p>
        </div>
        <div className="Thirdbottom">
          <div className="ThirdbottomLeft">
            <FaHandRock className="AboutIconWhite" />
            <h3
              style={{
                textTransform: "uppercase",
                fontWeight: "900",
                textAlign: "center",
                color: "#001E57",
                letterSpacing: "2px",
              }}
            >
              Focus on Clean Environments
            </h3>
            <p style={{ fontWeight: 600 }}>
              Dedicated to creating hygienic solutions for various sectors.
            </p>
          </div>
          <div className="ThirdbottomRight">
            <FaHandHoldingWater className="AboutIconWhite" />
            <h3
              style={{
                textTransform: "uppercase",
                fontWeight: "900",
                textAlign: "center",
                letterSpacing: "2px",
              }}
            >
              Established Expertise
            </h3>
            <p style={{ fontWeight: 600 }}>
              Founded in Bangalore with a solid reputation for excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
