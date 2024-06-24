import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
// import "./PvcStripeCurtain.css";
import Section6 from "../../HomePage/Section6/Section6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const VertikaclBlinds = () => {

  const [selectedImage, setSelectedImage] = useState(
    "/VerticalBlinds/vertical_blinds_1.png"
  );
  const [startIndex, setStartIndex] = useState(0);

  const array = [
    {
      id: 1,
      title: "Pvc stripe curtain",
      desc: "Transparent PVC strips for easy passage while maintaining environmental control.",
      url: "/VerticalBlinds/vertical_blinds_2.png",
    },
    {
      id: 2,
      title: "Air curtain",
      desc: "Creates a barrier of air to separate indoor and outdoor environments, maintaining temperature and reducing energy loss.",
      url: "/VerticalBlinds/vertical_blinds_1.png",
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
            <h2>Vertical Blinds</h2>
          </div>
          <div className="pvcContentpara">
            <p>
              Vertical blinds are practical and stylish window treatments
              featuring vertically hanging slats that can be tilted to control
              light and privacy. They are ideal for large windows, sliding
              doors, and commercial spaces. Easy to operate and maintain,
              vertical blinds offer excellent light management and are available
              in a wide range of materials and colors. Their sleek design
              enhances the aesthetics of any room while providing functional
              benefits.
            </p>
            {/* <p>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Brand
              </span>
            </p>
            <ul>
              <li>FlowTech</li>
              <li>2mm, 3mm, 5mm * 200mm</li>
              <li>2mm, 3mm, 5mm * 300mm</li>
            </ul> */}
            {/* <p>
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

export default VertikaclBlinds;
