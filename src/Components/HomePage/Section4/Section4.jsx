import React from 'react'
import "./Section4.css"
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <>
      <div className="mainSection4">
        <div className="section4">
          <div className="section4First">
            <h2 className="dividerLine">About Us</h2>
            <p>
              Experience the distinction with Nikhil Enterprises - where your
              satisfaction takes precedence above all. As pioneers in the
              industry, we take immense pride in revolutionizing your
              environmental encounters.
            </p>
            <p>
              At Nikhil Enterprises, we go beyond merely supplying air curtains,
              PVC curtains, and cutting-edge solutions - we epitomize a
              commitment to surpassing mediocrity. Our trajectory is rooted in
              expertise, merging advanced technology with a customer-centric
              ethos.
            </p>
            <p>
              Recognizing the individuality of each space and the unique
              requirements therein, we customize our solutions to ensure optimal
              comfort, efficiency, and sustainability. With a vision to craft
              environments that seamlessly integrate with contemporary living,
              Nikhil Enterprises invites you to embark on a journey where
              innovation and unwavering commitment intersect, shaping spaces
              that truly thrive.
            </p>

            <Link to="/contact">
              <button className="btn3">
                CONTACT US
              </button>
            </Link>
          </div>
          <div className="section4Second">
            <img
              src="./images/nikhilenterprisers6.webp"
              alt="nikhilenterprisers6"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4
