import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "./BannerSection.css";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const getDivStyle = () => {
  if (window.innerWidth <= 800) {
    return {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      height: "50vh",
      backgroundRepeat: "no-repeat",
      // backgroundPosition: "center",
    };
  }
  
  return {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
};

const slideImages = [
  {
    url: "./images/nikhilenterprisesbanglore1.webp",
    caption: "Slide 1",
  },
  {
    url: "./images/nikhilenterprisesbanglore2.webp",
    caption: "Slide 2",
  },
  {
    url: "./images/nikhilenterprisesbanglore3.webp",
    caption: "Slide 3",
  },
  {
    url: "./images/nikhilenterprisesbanglore4.webp",
    caption: "Slide 3",
  },
  {
    url: "./images/nikhilenterprisesbanglore5.webp",
    caption: "Slide 3",
  },
];

const BannerSection = () => {
  const [divStyle, setDivStyle] = useState(getDivStyle());

  useEffect(() => {
    const handleResize = () => {
      setDivStyle(getDivStyle());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="BannerMain">
      {/* Right */}
      <div className="BannerRight">
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  {/* <img src={slideImage.url} alt="" /> */}
                  {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      {/* Left */}
      <div className="BannerLeft">
        <div className="BannerleftMain">
          <div className="VerticalBar"></div>
          <div className="BannerLeftContent">
            <h4>
              TOP CLASS, WORLD-CLASS PRODUCTS TO SUIT YOUR NEEDS AND BUDGET
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
