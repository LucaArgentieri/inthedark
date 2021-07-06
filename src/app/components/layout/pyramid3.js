import React from "react";
import img from "../../assets/images/giza3.png";

export default function pyramid3() {
  return (
    <div className="stone2 flex flex_column">
      <div className="title">
        <p className="nobleman fs-160 upcase">Orion</p>
        <p className="nobleman fs-96 upcase">correlation theory</p>
      </div>
      <div className="text_container">
        <div className="flex pyramid1">
          <p className="noblemantext fs-24">
            This thesis is suggested by Bauval and Gilbert, later known as the
            Orion Correlation Theory on the existence of a perfect coincidence
            between the arrangement of the Orion Belt three stars and that of
            the three pyramids of Giza. So it could be said that the pyramids
            would represent the monumental reproduction of the Constellation on
            the ground.
          </p>
          <img src={img} alt="" />
        </div>
        <div className="flex">
          <p className="noblemantext fs-24">
            According to more accurate studies it emerged that in any case the
            ducts, classified as aeration channels of the pyramid of Cheops,
            really fulfilled the function of stellar goals but with dating
            between 2700 BC. and 2400 BC for the canal that pointed to a star of
            the Belt and 2450 BC. for the canal that pointed to Sirio.
          </p>
        </div>
      </div>
    </div>
  );
}
