import React, { useEffect, useState } from "react";
import ScenaPunto from "../components/scenaPunto";
import { gsap, Power4 } from "gsap";
import { click, hover } from "../animations/sounds";
gsap.registerEase(Power4);

const Hotspot = ({ id, type }) => {
  const [show, setShow] = useState(false);
  const [sz, setSz] = useState(0);

  useEffect(() => {
    setSz(document.documentElement.clientWidth);
  }, []);

  const openPopUp = () => {
    click();
    const popUpTl = gsap.timeline({ ease: Power4.easeInOut });
    gsap.to(`#hotspot-${id} .hotspot__circle--outer`, {
      width: sz * 2.5,
      height: sz * 2.5,
      duration: 0.2,
    });
    gsap.to(`#hotspot-${id} .hotspot__circle--inner`, {
      width: sz * 2.5,
      height: sz * 2.5,
      backgroundColor: "#fff",
      duration: 0.2,
      pointerEvents: "none",
      onComplete: () => {
        setShow(true);

        gsap.to(`#hotspot-${id} .hotspot__circle--outer`, {
          display: "none",
        });

        gsap.to(".a-bcg-body" + id, {
          duration: 0.2,
          opacity: 1,
          display: "flex",
        });
      },
    });

    setShow(false);
  };
  return (
    <>
      <div
        className="hotspot"
        id={`hotspot-${id}`}
        onClick={openPopUp}
        onMouseEnter={() => hover()}
      >
        <div className="hotspot__circle hotspot__circle--outer">
          <div className="hotspot__circle hotspot__circle--inner"></div>
        </div>
      </div>
      {show ? <ScenaPunto id={id} type={type} /> : ""}
    </>
  );
};

export default Hotspot;
