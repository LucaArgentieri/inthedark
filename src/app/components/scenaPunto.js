import React from "react";
import { click, hover } from "../animations/sounds";
import { gsap } from "gsap";

import Stone1 from "../components/layout/stone1";
import Stone2 from "../components/layout/stone2";
import Stone3 from "../components/layout/stone3";
import Stone4 from "../components/layout/stone4";
import Pyramid1 from "../components/layout/pyramid1";
import Pyramid2 from "../components/layout/pyramid2";
import Pyramid3 from "../components/layout/pyramid3";

const ScenaPunto = ({ id, type }) => {
  const closePopup = () => {
    click();
    gsap.to(`#hotspot-${id} .hotspot__circle--outer`, {
      display: "flex",
    });

    gsap.to(".a-bcg-body", {
      duration: 0.2,
      opacity: 0,
      display: "none",
      zIndex: 0,
    });

    gsap.to(`#hotspot-${id} .hotspot__circle--inner`, {
      width: "15px",
      height: "15px",
      backgroundColor: "#fff",
      duration: 0,
    });

    gsap.to(`#hotspot-${id} .hotspot__circle--outer`, {
      width: "35px",
      height: "35px",
      duration: 0,
    });
  };

  return (
    <div className="a-bcg-body flex flex_center flex_column c-black" id={id}>
      <div className="a-bcg-body-container">
        <span onMouseEnter={() => hover()} onClick={closePopup}>
          <h3 className="a-title nobleman regular">Return to model</h3>
        </span>
      </div>
      {type === "stonehenge"
        ? {
            0: <Stone1 />,
            1: <Stone2 />,
            2: <Stone3 />,
            3: <Stone4 />,
          }[id]
        : {
            0: <Pyramid1 />,
            1: <Pyramid2 />,
            2: <Pyramid3 />,
          }[id]}
    </div>
  );
};

export default ScenaPunto;
