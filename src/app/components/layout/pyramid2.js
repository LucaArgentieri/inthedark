import React from "react";
import img from "../../assets/images/giza2.webp";

export default function pyramid2() {
  return (
    <div className="stone2 flex flex_column">
      <div className="title">
        <p className="nobleman fs-96 upcase">how it all</p>
        <p className="nobleman fs-160 upcase">started</p>
      </div>
      <div className="text_container">
        <div className="flex pyramid1">
          <p className="noblemantext fs-24 bettertext">
            The attention to the sky by the Egyptians is not only found thanks
            to the astronomical orientation, in fact the pyramids were built in
            relation to the Orion belt, but also from the numerous references
            that we find within ancient papyri and in representations within the
            structures themselves.
          </p>
          <img src={img} alt="" />
        </div>
        <div className="flex">
          <p className="noblemantext fs-24 bettertext">
            The ventilation channels of the pyramid of Cheops at Giza point
            towards Orion and Sirius as they were positioned in 10,500 BC.
          </p>
        </div>
      </div>
    </div>
  );
}
