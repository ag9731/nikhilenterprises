import React from "react";
import "./Section6.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Section6 = () => {


   const handleExploreClick = () => {
     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
   };

  const array = [
    {
      id: 1,
      title: "Pvc stripe curtain",
      desc: "Transparent PVC strips for easy passage while maintaining environmental control.",
      // url: "./HomePageProducts/aircurtain.webp",
      url: "/homepageproducts/pvcstripCurtain.png",
      link: "/products/pvc-strip-curtains",
    },
    {
      id: 1,
      title: "Air curtain",
      desc: "Creates a barrier of air to separate indoor and outdoor environments, maintaining temperature and reducing energy loss.",
      // url: "./HomePageProducts/automiticdoor.webp",
      url: "/homepageproducts/ssaircurtain.png",
      link: "/products/air-curtain",
    },
    {
      id: 1,
      title:
        "Soft wall curtain,car detailing centre curtains washing area curtains",
      desc: "Flexible partitions for car detailing centers and washing areas, offering privacy and containment.",
      url: "/homepageproducts/SoftWallCurtain.png",
      link: "/products/softwall-curtain",
    },
    // {
    //   id: 1,
    //   title: "Industrial door curtains",
    //   desc: "Heavy-duty curtains designed to control dust, noise, and temperature in industrial settings.",
    //   url: "./HomePageProducts/pvcstripcurtain.webp",
    // },
    {
      id: 1,
      title: "Fly catcher",
      desc: "Device designed to attract and capture flying insects, maintaining hygiene in indoor spaces.",
      url: "/homepageproducts/FlyCatcher.png",
      link: "/products/fly-catcher",
    },
    {
      id: 1,
      title: "Monsoon blinds",
      desc: "Weather-resistant blinds designed to protect against heavy rain and wind.",
      url: "/homepageproducts/MonsoonBlinds.png",
      link: "/products/monsoon-blinds",
    },
    {
      id: 1,
      title: "Pvc blinds",
      desc: "Durable blinds made from PVC material, suitable for both indoor and outdoor use.",
      url: "/homepageproducts/PvcBlinds.png",
      link: "/products/pvc-blinds",
    },
    // {
    //   id: 1,
    //   title: "Roller blinds",
    //   desc: "Fabric blinds that roll up and down, offering privacy and light control.",
    //   url: "./HomePageProducts/abstract01.webp",
    // },
    // {
    //   id: 1,
    //   title: "Vartikacl blinds",
    //   desc: "Blinds with vertical slats, ideal for covering large windows and sliding doors.",
    //   url: "./HomePageProducts/abstract01.webp",
    // },
    // {
    //   id: 1,
    //   title: "Hand dryer",
    //   desc: "Electric device for quickly drying hands in restrooms and public facilities.",
    //   url: "./HomePageProducts/abstract01.webp",
    // },
    // {
    //   id: 1,
    //   title: "Automatic door",
    //   desc: "Doors equipped with sensors or motion detectors to open and close automatically, enhancing convenience and accessibility.",
    //   url: "./HomePageProducts/abstract01.webp",
    // },
  ];

  return (
    <>
      <div className="section6">
        <div className="section6Main">
          <h2>EXPLORE OUR PRODUCTS</h2>
        </div>

        <div className="section6Down">
          <div className="section6Child">
            {array.map((item, index) => (
              <React.Fragment key={index}>
                <div className="ColumnsMain">
                  <div className="Column1">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <Link to={item.link}>
                      <button className="btn4" onClick={handleExploreClick}>
                        Explore
                      </button>
                    </Link>
                  </div>
                  <div className="Column2">
                    <img src={item.url} alt={item.title} />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <Link to="/">
            <button className="btn6" onClick={handleExploreClick}>
              EXPLORE MORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section6;
