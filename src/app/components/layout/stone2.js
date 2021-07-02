import React from "react";
import { textData } from "../../assets/data/text";

export default function Stone2() {
  return (
    <div className="stone2 flex flex_column">
      <div className="title">
        <p className="nobleman fs-96 upcase">what is</p>
        <p className="nobleman fs-160 upcase">stonehenge</p>
      </div>
      <div className="text_container">
        <div className="flex">
          <p className="nobleman fs-24">
            The original axis of the site is oriented towards the dawn of the
            summer solstice and the first lights of dawn hit the Altar stone in
            the stone circle. In the same way, looking from the inside out, the
            sunset of the winter solstice is framed and the last sunlights hit
            the Altar stone.
          </p>
          <img src={textData.stonehenge[0].upperImage} alt="" />
        </div>
        <div className="flex">
          <p className="nobleman fs-24">
            An ancient prehistoric site in Wiltshire, England, near Amesbury,
            Stonehenge consists of an outer ring of vertical standing stones; it
            was built around the fifth millennium BC, during the so called
            megalithic architecture, one of the first examples of architectural
            styles spread in all Europe.
          </p>
          <img src={textData.stonehenge[0].upperImage} alt="" />
        </div>
      </div>
    </div>
  );
}
