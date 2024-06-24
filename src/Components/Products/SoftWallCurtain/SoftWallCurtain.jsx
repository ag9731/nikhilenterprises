import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
// import "./PvcStripeCurtain.css";
import Section6 from "../../HomePage/Section6/Section6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const SoftWallCurtain = () => {

  const [selectedImage, setSelectedImage] = useState(
    "/SoftWallCurtain/softwall_curtain_1.webp"
  );
  const [startIndex, setStartIndex] = useState(0);


  const array = [
    {
      id: 1,
      title: "Pvc stripe curtain",
      desc: "Transparent PVC strips for easy passage while maintaining environmental control.",
      url: "/SoftWallCurtain/softwall_curtain_1.webp",
    },
    {
      id: 2,
      title: "Air curtain",
      desc: "Creates a barrier of air to separate indoor and outdoor environments, maintaining temperature and reducing energy loss.",
      url: "/SoftWallCurtain/softwall_curtain_2.webp",
    },
    {
      id: 3,
      title: "Fly catcher",
      desc: "Device designed to attract and capture flying insects, maintaining hygiene in indoor spaces.",
      url: "/SoftWallCurtain/softwall_curtain_3.webp",
    },
    {
      id: 4,
      title: "Monsoon blinds",
      desc: "Weather-resistant blinds designed to protect against heavy rain and wind.",
      url: "/SoftWallCurtain/softwall_curtain_4.webp",
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
            <h2>
              Soft wall curtain Car washing area & detailing centre curtains
            </h2>
          </div>
          <div className="pvcContentpara">
            <p>
              Soft wall curtains for car washing areas and detailing centers are
              flexible, durable barriers that separate different workspaces.
              They help contain water spray, chemicals, and debris, ensuring a
              cleaner and safer environment. These curtains are easy to install
              and maintain, providing efficient space management and workflow
              organization. Ideal for enhancing operational efficiency and
              maintaining a professional appearance.
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
            <p>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Specifications
              </span>
            </p>
            <ul>
              <li>Car Washing Area</li>
              <li>Tinkering Area</li>
              <li>Flame Proof Body</li>
              <li>Paint and for industrial use</li>
            </ul>
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

export default SoftWallCurtain;
