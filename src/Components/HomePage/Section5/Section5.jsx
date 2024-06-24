import React from "react";
import "./Section5.css"; // Ensure you have the correct path to your CSS file
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section5 = () => {
  const settings = {
    dots: window.innerWidth <= 768 ? false : true,
    infinite: true,
    // slidesToShow: 4 ,
    slidesToShow: window.innerWidth <= 768 ? 2 : 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: window.innerWidth <= 768 ? 2000 : 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const images = [
    { url: "./clients/1.png" },
    { url: "./clients/2.png" },
    { url: "./clients/3.png" },
    { url: "./clients/4.png" },
    { url: "./clients/5.png" },
    { url: "./clients/6.png" },
    { url: "./clients/7.png" },
    { url: "./clients/8.png" },
    { url: "./clients/9.png" },
    { url: "./clients/10.png" },
    { url: "./clients/11.png" },
    { url: "./clients/12.png" },
    { url: "./clients/13.png" },
  ];

  return (
    <div className="section5">
      <div className="section5Main">
        <h2>OUR - CLIENTS</h2>
      </div>

      {/* Brand Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="brand-slide">
              <img src={image.url} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section5;
