import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
import SoLLogo from "../img/sollogo.svg";
import SoLText from "../img/soltext.svg";
import Sparkle from "../img/sparkle.svg";
import Ross from "../img/Ross.png";
import VV from "../img/VV.png";
import Nokia from "../img/NOKIA.png";
import DPI from "../img/DPI.png";
import LH from "../img/logo.png";
import syrc from "../img/syrc.png";
import solOne from "../img/solOne.JPG";
import solTwo from "../img/solTwo.jpg";
import solThree from "../img/solThree.JPG";

// should auto go to the start of the page

const Events = () => {
  const sectionRefs = {
    lunarhacks: useRef(null),
    about: useRef(null),
    pastEvents: useRef(null),
    ourTeam: useRef(null),
    contact: useRef(null),
  };

  // Handle URL hash on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Get the section from URL hash
      if (hash && sectionRefs[hash]?.current) {
        sectionRefs[hash].current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div 
      className="sol"
    >
      {/* Styled button linking to the home page */}
      <a href="/" className="event-button" >LunarHacks</a>
      
      <div 
        style={{ display:"flex"}}
      >
  
        <img 
          src={SoLLogo} alt="Spark of Luminosity logo"
          style={{ width:"50%" }}
        />
        <div
          style={{ width:"50%", display:"flex", flexDirection:"column", alignItems:"center" , paddingTop:"10%"}}
        >
          <p
              style={{ color:"#EC70A1", fontWeight:"bold", fontSize:"24px" }}
            >
              Thank you for coming to ...
          </p>

          <img src={SoLText} alt="Spark of Luminosity" 
            style={{ width:"80%" }}
          />

<div className="orgLogos-container">
  <a 
    href="https://www.instagram.com/lunarhacks/" 
    className="orgLogos"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={LH} alt="Lunar Hacks" />
  </a>

  <span className="separator">×</span>

  <a 
    href="https://syrc.ca/" 
    className="orgLogos"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={syrc} alt="Spark Youth Robotics Club" />
  </a>
</div>
        </div>
      </div>
      <div
        style={{ display:"flex", justifyContent:"space-between", marginTop:"18px"
          }}
      >
        <div>
          <p className="solheader">WHAT WAS IT?</p>
          <p className="soltext" >
            On April 26 2025 at Carleton University, Lunarhacks and Spark Youth Robotics Club presented Spark of Luminosity! A children's symposium packed with a full day of workshops, crafts, experiments, and swag.
            70+ children from grades 1 to 8 joined us to learn about coding, robotics, and tons of epic STEAM concepts!
          </p>
          
        </div>
        <img
        src={Sparkle}
        alt="sparkle"
        className="sparkle"
        />

      </div>

      <div className="sol-photos">
        <img src={solOne} alt="Spark of Luminosity 1" />
        <img src={solTwo} alt="Spark of Luminosity 2" />
        <img src={solThree} alt="Spark of Luminosity 3" />
      </div>
      
      <div
        style={{ marginTop:"60px" }}
      >
        <p className="solheader">OUR SPONSORS</p>
        <p className="soltext" > A huge thank you to our sponsors to make this event possible!</p>
        
              <div className="sponsor-logos-container">
        
              <a 
          href="https://www.rossvideo.com/" 
          className="sponsorLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Ross} alt="Ross Video Ltd." />
        </a>


  
        <a 
          href="https://www.nokia.com/careers/our-locations/canada/" 
          className="sponsorLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Nokia} alt="Nokia" />
        </a>
        <a 
          href="https://carleton.ca/vv/" 
          className="vvLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={VV} alt="Virtual Ventures" />
        </a>

        <a 
          href="https://dpi-canada.com/" 
          className="sponsorLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DPI} alt="DPI" />
        </a>
      </div>




        <p className="solheader">STAY TUNED FOR FUTURE EVENTS!</p>



      </div>
    </div>
  );
};

export default Events;
