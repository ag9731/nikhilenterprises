import React from 'react';
import BannerSection from './BannerSectin/BannerSection';
import Section2 from './Section2/Section2';
import "./Homepage.css";
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';

const Homepage = () => {
  return (
    <div className='HomeMain'>
        <BannerSection/>
        <Section4/>
        <Section2/>
        <Section3/>
        <Section5/>
        <Section6/>
        <Section7/>
    </div>
  )
}

export default Homepage
