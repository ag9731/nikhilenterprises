import React from 'react';
import "./Section7.css";
import { FaCheck, FaTruck, FaRegThumbsUp } from "react-icons/fa";


const Section7 = () => {

  const array = [
    {
      icon: <FaRegThumbsUp />,
      title: "Quality",
    },
    {
      icon: <FaCheck />,
      title: "Longevity",
    },
    {
      icon: <FaTruck />,
      title: "Instant Deliveries",
    },
  ];
  return (
    <div className="section7">
      <div className="section7MAin">
        {array.map((item1, index) => (
          <>
            {/* <div className=""> */}
            <div key={index} className="section7Children">
              <span className='Icons'>{item1.icon}</span>
              <h3>{item1.title}</h3>
            </div>
            {/* </div> */}
          </>
        ))}
      </div>
    </div>
  );
}

export default Section7
