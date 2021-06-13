import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
gsap.registerEase(Power4);

const Hotspot = ({ id }) => {
  useEffect(() => {}, []);

  const openPopUp = () => {
    const popUpTl = gsap.timeline({ ease: Power4.easeInOut });
    const sz = document.documentElement.clientWidth;
    popUpTl
      .to(`#hotspot-${id} .hotspot__circle--outer`, {
        width: sz * 2.5,
        height: sz * 2.5,
        duration: 0.2,
      })
      .to(`#hotspot-${id} .hotspot__circle--inner`, {
        width: sz * 2.5,
        height: sz * 2.5,
        backgroundColor: "#fff",
        duration: 0.2,
      });
  };
  return (
    <div className="hotspot" id={`hotspot-${id}`} onClick={openPopUp}>
      <div className="hotspot__circle hotspot__circle--outer">
        <div className="hotspot__circle hotspot__circle--inner"></div>
      </div>
    </div>
  );
};

export default Hotspot;
