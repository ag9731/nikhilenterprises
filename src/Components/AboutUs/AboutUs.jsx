import React from "react";
import "./AboutUs.css";
import Section3 from "../HomePage/Section3/Section3";
import Section4 from "../HomePage/Section4/Section4";

const AboutUs = () => {
  return (
    <div className="AboutUsMain">
      <div className="AboutFirst">
        <Section4 />
      </div>
      <div>
        <Section3 />
      </div>
      <div className="AboutUsThirdSection">
        <div className="vision">
          <div>
            <img className="VisionImage" src="./AboutUs/1.webp" alt="vision" />
          </div>
          <div className="Aboutcontent">
            <div>
              <h2>Our Vision</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                omnis ex dolorum odio hic excepturi ipsam temporibus ea,
                praesentium consequuntur natus commodi eaque eos minus
                recusandae asperiores assumenda fugiat deserunt.
              </p>
            </div>

            <div>
              
              <button className="btn5">OUR PRODUCTS</button>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="Aboutcontent">
            <div>
              <h2>Our Mission</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                omnis ex dolorum odio hic excepturi ipsam temporibus ea,
                praesentium consequuntur natus commodi eaque eos minus
                recusandae asperiores assumenda fugiat deserunt.
              </p>
            </div>
            <div>
              <button className="btn5">OUR PRODUCTS</button>
            </div>
          </div>
          <div>
            <img
              className="MissionImage"
              src="./AboutUs/2.webp"
              alt="mission"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
