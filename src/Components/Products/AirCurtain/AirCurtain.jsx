import React, { useState } from "react";
import Section6 from "../../HomePage/Section6/Section6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const AirCurtain = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/AirCurtain/aircurtain1.webp"
  );
  const [startIndex, setStartIndex] = useState(0);

  const array = [
    {
      id: 1,
      title: "Pvc stripe curtain",
      desc: "Transparent PVC strips for easy passage while maintaining environmental control.",
      url: "/AirCurtain/aircurtain1.webp",
    },
    {
      id: 2,
      title: "Air curtain",
      desc: "Creates a barrier of air to separate indoor and outdoor environments, maintaining temperature and reducing energy loss.",
      url: "/AirCurtain/aircurtain2.webp",
    },
    {
      id: 3,
      title: "Fly catcher",
      desc: "Device designed to attract and capture flying insects, maintaining hygiene in indoor spaces.",
      url: "/AirCurtain/aircurtain3.webp",
    },
    {
      id: 4,
      title: "Monsoon blinds",
      desc: "Weather-resistant blinds designed to protect against heavy rain and wind.",
      url: "/AirCurtain/aircurtain4.webp",
    },
  ];

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < array.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="pvcstripecurtainmain">
      <div className="pvcstripcurtain">
        <div className="pvcContent">
          <div className="pvcContenthead">
            <h2>AIR CURTAIN</h2>
          </div>
          <div className="pvcContentpara">
            <p>
              An air curtain is a device designed to create an invisible barrier
              of high-velocity air across doorways or openings. It effectively
              separates different environments while allowing unobstructed
              passage of people and vehicles. Air curtains help in maintaining
              indoor temperature, reducing energy costs, and preventing the
              entry of dust, insects, and pollutants. They are commonly used in
              commercial and industrial settings for climate control and hygiene
              purposes.
            </p>
            <p>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Brand
              </span>
            </p>
            <ul>
              <li>FlowTech</li>
              <li>2mm, 3mm, 5mm * 200mm</li>
              <li>2mm, 3mm, 5mm * 300mm</li>
            </ul>
            <p>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Material
              </span>
            </p>
            <ul>
              <li>
                Industrial Air Curtain(CRCA) Powder Coated with SS Blower and
                ABS Blower
              </li>
              <li>SS - Stainless Stell Full Body</li>
              <li>Slim Body Commercial Air Curtain</li>
              <li>Flame Proof Body</li>
              <li>Singel Phase, Turbo, Three Phase, Flame Proof</li>
            </ul>
            <button className="btn5">BOOK NOW</button>
          </div>
        </div>
        <div className="pvcImage">
          <div className="Column1PVC">
            <img src={selectedImage} alt="Selected" />
          </div>
          <div className="Column2PVC">
            <div className="NavigationArrowUp" onClick={handlePrevClick}>
              <FaAngleUp className="arrowIcons" />
            </div>
            {array.slice(startIndex, startIndex + 3).map((pvcImages, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(pvcImages.url)}
                className="images34"
              >
                <img src={pvcImages.url} alt={pvcImages.title} />
              </div>
            ))}
            <div className="NavigationArrowDown" onClick={handleNextClick}>
              <FaAngleDown className="arrowIcons" />
            </div>
          </div>
        </div>
      </div>
      <Section6 />
    </div>
  );
};

export default AirCurtain;
