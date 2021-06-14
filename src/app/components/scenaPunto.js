import React from "react";
import { textData } from "../assets/data/text";

import { gsap, Power4 } from "gsap";
gsap.registerEase(Power4);

const ScenaPunto = ({ id, type }) => {
  const closePopup = () => {
    gsap.to(".a-bcg-body", {
      duration: 1,
      opacity: 0,
      display: "none",
    });

    gsap.to(`#hotspot-${id} .hotspot__circle--inner`, {
      width: "15px",
      height: "15px",
      backgroundColor: "#fff",
      duration: 0.2,
    });

    gsap.to(`#hotspot-${id} .hotspot__circle--outer`, {
      width: "35px",
      height: "35px",
      duration: 0.2,
    });
  };

  return (
    <div className="a-bcg-body flex flex_center flex_column c-black">
      <span onClick={closePopup}>
        <h3 className="a-title nobleman regular">Return to model</h3>
      </span>

      <div className="container">
        <div className="row">
          <h3 className="title nobleman bold fs-36 upcase">
            {type === "stonehenge"
              ? textData.stonehenge[id].title
              : textData.pyramid[id].title}
          </h3>
        </div>
      </div>

      <img
        src={
          type === "stonehenge"
            ? textData.stonehenge[id].upperImage
            : textData.pyramid[id].upperImage
        }
        className="img-position"
      />

      <p className="txt-position athiti medium">
        {type === "stonehenge"
          ? textData.stonehenge[id].desc1
          : textData.pyramid[id].desc1}
      </p>

      <img
        src={
          type === "stonehenge"
            ? textData.stonehenge[id].image
            : textData.pyramid[id].image
        }
        className="img-position"
      />

      <img
        src={
          type === "stonehenge"
            ? textData.stonehenge[id].image2
            : textData.pyramid[id].image2
        }
        className="img-position"
      />

      <p className="txt-position athiti medium">
        {type === "stonehenge"
          ? textData.stonehenge[id].desc2
          : textData.pyramid[id].desc2}
      </p>

      <p className="n-position athiti medium">
        {id}/
        {type === "stonehenge"
          ? textData.stonehenge.length
          : textData.pyramid.length}
      </p>
    </div>
  );
};

export default ScenaPunto;
