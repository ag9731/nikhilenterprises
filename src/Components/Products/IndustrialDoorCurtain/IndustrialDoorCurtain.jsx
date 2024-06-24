import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
// import "./PvcStripeCurtain.css";
import Section6 from "../../HomePage/Section6/Section6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


const IndustrialDoorCurtain = () => {


  const [selectedImage, setSelectedImage] = useState(
    "/IndustrialDoorCurtain/industrial_door_curtain_3.webp"
  );
  const [startIndex, setStartIndex] = useState(0);

  const array = [
    {
      id: 1,
      title: "Pvc stripe curtain",
      desc: "Transparent PVC strips for easy passage while maintaining environmental control.",
      url: "/IndustrialDoorCurtain/industrial_door_curtain_1.webp",
    },
    {
      id: 2,
      title: "Air curtain",
      desc: "Creates a barrier of air to separate indoor and outdoor environments, maintaining temperature and reducing energy loss.",
      url: "/IndustrialDoorCurtain/industrial_door_curtain_2.webp",
    },
    {
      id: 3,
      title: "Fly catcher",
      desc: "Device designed to attract and capture flying insects, maintaining hygiene in indoor spaces.",
      url: "/IndustrialDoorCurtain/industrial_door_curtain_3.webp",
    },
    {
      id: 4,
      title: "Monsoon blinds",
      desc: "Weather-resistant blinds designed to protect against heavy rain and wind.",
      url: "/IndustrialDoorCurtain/industrial_door_curtain_4.webp",
    },
  ];

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < array.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="pvcstripecurtainmain">
      <div className="pvcstripcurtain">
        <div className="pvcContent">
          <div className="pvcContenthead">
            <h2>Industrial Door Curtain</h2>
          </div>
          <div className="pvcContentpara">
            <p>
              Industrial door curtains are heavy-duty, flexible barriers used to
              separate workspaces and control environmental conditions in
              industrial settings. They help regulate temperature, contain dust,
              and reduce noise, improving energy efficiency and workplace
              safety. Easy to install and maintain, these curtains are ideal for
              factories, warehouses, and manufacturing plants. They enhance
              operational efficiency by allowing quick and unobstructed passage.
            </p>
            {/* <p>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Brand
              </span>
            </p> */}
            {/* <ul>
              <li>FlowTech</li>
              <li>2mm, 3mm, 5mm * 200mm</li>
              <li>2mm, 3mm, 5mm * 300mm</li>
            </ul> */}
            {/* <p>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Material
              </span>
            </p> */}
            {/* <ul>
              <li>
                Industrial Air Curtain(CRCA) Powder Coated with SS Blower and
                ABS Blower
              </li>
              <li>SS - Stainless Stell Full Body</li>
              <li>Slim Body Commercial Air Curtain</li>
              <li>Flame Proof Body</li>
              <li>Singel Phase, Turbo, Three Phase, Flame Proof</li>
            </ul> */}
            <button className="btn5">BOOK NOW</button>
          </div>
        </div>
        <div className="pvcImage">
          <div className="Column1PVC">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Selected",
                  isFluidWidth: true,
                  src: selectedImage,
                },
                largeImage: {
                  src: selectedImage,
                  width: 1200,
                  height: 1800,
                },
                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                enlargedImagePosition: "over",
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: false,
              }}
            />
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

export default IndustrialDoorCurtain;
