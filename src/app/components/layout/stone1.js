import React from "react";
import { textData } from "../../assets/data/text";

console.log(textData);
export default function Stone1() {
  return (
    <div className="stone1 flex flex_column">
      <div>
        <p className="nobleman fs-96 upcase">what was</p>
        <p className="nobleman fs-160 upcase">stonehenge</p>
        <p className="nobleman fs-96 upcase">for?</p>
      </div>
      <div className="text_container">
        <div>
          <p className="nobleman fs-24">
            The original axis of the site is oriented towards the dawn of the
            summer solstice and the first lights of dawn hit the Altar stone in
            the stone circle. In the same way, looking from the inside out, the
            sunset of the winter solstice is framed and the last sunlights hit
            the Altar stone.
          </p>
        </div>
        <div>
          <p className="nobleman fs-24">
            The solstices were often associated with the ideas of renewal and
            rebirth, and it seems reasonable to assume that the religious
            ceremonies took place within the stone circle.
          </p>
        </div>
        <div>
          <img src={textData.stonehenge[0].upperImage} alt="" />
        </div>
      </div>
    </div>
  );
}
