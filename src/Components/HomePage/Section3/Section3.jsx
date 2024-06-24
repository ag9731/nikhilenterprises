import React from 'react';
import CountUp from "react-countup";
import "./Section3.css";

const Section3 = () => {
  return (
    <>
      {/* 1st Count */}
      <div className="section3Main">
        <div>
          <CountUp start={0} end={10} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div className="section3First">
                <h1 className="Child1" ref={countUpRef} />
                <h1 className="Child2">Years Of Experience</h1>
              </div>
            )}
          </CountUp>
        </div>
        {/* 2nd Count */}
        <div>
          <CountUp start={0} end={100} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div className="section3Second">
                <h1 className="Child1" ref={countUpRef} />
                <h1 className="Child2">Industries Built</h1>
              </div>
            )}
          </CountUp>
        </div>

        {/* 3rd Count */}
        <div>
          <CountUp start={0} end={50} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div className="section3Third">
                <h1 className="Child1" ref={countUpRef} />
                <h1 className="Child2">Satisfied Customers</h1>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </>
  );
}

export default Section3
