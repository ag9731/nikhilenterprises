import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./PvcStripeCurtain.css";
import Section6 from "../../HomePage/Section6/Section6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const PvcStripeCurtain = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/PvcStripCurtains/pvc01.webp"
  );
  const [startIndex, setStartIndex] = useState(0);


  const array1 = [
    {
      url: "/WeldingGrade/weldinggrade1.jpg",
      title: "Welding Grade PVC Stripe Curtain",
    },
    {
      url: "/WeldingGrade/weldinggrade2.jpg",
      title: "Welding Green PVC Stripe Curtain",
    },
    {
      url: "/WeldingGrade/weldinggrade3.jpg",
      title: "Welding Grade PVC Stripe Curtain",
    },
    {
      url: "/WeldingGrade/weldinggrade4.jpg",
      title: "Welding Red PVC Stripe Curtain",
    },
  ];

  const array = [
    {
      id: 1,
      title: "Pvc stripe curtain",
      desc: "Transparent PVC strips for easy passage while maintaining environmental control.",
      url: "/PvcStripCurtains/pvc01.webp",
    },
    {
      id: 2,
      title: "Air curtain",
      desc: "Creates a barrier of air to separate indoor and outdoor environments, maintaining temperature and reducing energy loss.",
      url: "/PvcStripCurtains/pvc02.webp",
    },
    {
      id: 3,
      title: "Fly catcher",
      desc: "Device designed to attract and capture flying insects, maintaining hygiene in indoor spaces.",
      url: "/PvcStripCurtains/pvc03.webp",
    },
    {
      id: 4,
      title: "Monsoon blinds",
      desc: "Weather-resistant blinds designed to protect against heavy rain and wind.",
      url: "/PvcStripCurtains/pvc04.webp",
    },
    {
      id: 5,
      title: "Monsoon blinds",
      desc: "Weather-resistant blinds designed to protect against heavy rain and wind.",
      url: "/PvcStripCurtains/pvc05.webp",
    },
    {
      id: 6,
      title: "Monsoon blinds",
      desc: "Weather-resistant blinds designed to protect against heavy rain and wind.",
      url: "/PvcStripCurtains/pvc06.webp",
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
    <>
      <div className="pvcstripecurtainmain">
        <div className="pvcstripcurtain">
          <div className="pvcContent">
            <div className="pvcContenthead">
              <h2>PVC STRIP CURTAIN</h2>
            </div>
            <div className="pvcContentpara">
              <p>
                PVC strip curtains are an effective and economical solution for
                controlling temperature and reducing energy costs in various
                industrial and commercial settings. These flexible, transparent
                strips provide easy access for people and vehicles while keeping
                out dust, insects, and contaminants. They also help to maintain
                a consistent environment, enhancing comfort and productivity.
                Durable and easy to install, PVC strip curtains are an essential
                addition to warehouses, factories, and storage areas.
              </p>
              <p>
                <span
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Brand
                </span>
              </p>
              <ul>
                <li>FlowTech</li>
                <li>2mm, 3mm, 5mm * 200mm</li>
                <li>2mm, 3mm, 5mm * 300mm</li>
              </ul>
              <p>
                <span
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Specification
                </span>
              </p>
              <ul>
                <li>Anti-Static, Food-Grade, Anti-Insect </li>
                <li>Tint-Blue, Orange</li>
                <li>Yellow, Green, Blue, Milkey-White, Black</li>
                <li>Welding Green, Red</li>
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
              {array
                .slice(startIndex, startIndex + 3)
                .map((pvcImages, index) => (
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

      {/* downSection */}

      <div className="secondColumnMain">
        {array1.map((pvcimages,index)=>(
          <div key={index} >
            <img className="pvcImages" src={pvcimages.url} alt="" />
            
            <h3>{pvcimages.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default PvcStripeCurtain;
