import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import PvcStripeCurtain from "./Components/Products/PvcStrpeCurtain/PvcStripeCurtain";
import AirCurtain from "./Components/Products/AirCurtain/AirCurtain";
import AutomaticDoor from "./Components/Products/AutomaticDoor/AutomaticDoor";
import FlyCatcher from "./Components/Products/FlyCatcher/FlyCatcher";
import HandDryer from "./Components/Products/HandDryer/HandDryer";
import IndustrialDoorCurtain from "./Components/Products/IndustrialDoorCurtain/IndustrialDoorCurtain";
import MonsoonBlinds from "./Components/Products/MonsoonBlinds/MonsoonBlinds";
import PvcBlinds from "./Components/Products/PvcBlinds/PvcBlinds";
import RollerBlinds from "./Components/Products/RollerBlinds/RollerBlinds";
import SoftWallCurtain from "./Components/Products/SoftWallCurtain/SoftWallCurtain";
import VertikaclBlinds from "./Components/Products/VertikaclBlinds/VertikaclBlinds";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact/>} />
          <Route
            path="products/pvc-strip-curtains"
            element={<PvcStripeCurtain />}
          />
          <Route path="products/air-curtain" element={<AirCurtain />} />
          <Route path="products/automatic-door" element={<AutomaticDoor />} />
          <Route path="products/fly-catcher" element={<FlyCatcher />} />
          <Route path="products/hand-dryer" element={<HandDryer />} />
          <Route
            path="products/industrial-door-curtain"
            element={<IndustrialDoorCurtain />}
          />
          <Route path="products/monsoon-blinds" element={<MonsoonBlinds />} />
          <Route path="products/pvc-blinds" element={<PvcBlinds />} />
          <Route path="products/roller-blinds" element={<RollerBlinds />} />
          <Route
            path="products/softwall-curtain"
            element={<SoftWallCurtain />}
          />
          <Route
            path="products/vertikacl-blinds"
            element={<VertikaclBlinds />}
          />
          {/* <Homepage /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
