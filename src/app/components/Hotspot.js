import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
gsap.registerEase(Power4);

const Hotspot = () => {
  useEffect(() => {}, []);

  const openPopUp = () => {
    const tl = gsap.timeline({ ease: Power4.easeInOut });
    const sz = document.documentElement.clientWidth;
    tl.to(".hotspot__circle--outer", {
      width: sz * 2,
      height: sz * 2,
      duration: 0.2,
    }).to(".hotspot__circle--inner", {
      width: sz * 2,
      height: sz * 2,
      backgroundColor: "#fff",
      duration: 0.2,
    });
  };
  return (
    <div className="hotspot" onClick={openPopUp}>
      <div className="hotspot__circle hotspot__circle--outer">
        <div className="hotspot__circle hotspot__circle--inner"></div>
      </div>
    </div>
  );
};

export default Hotspot;
