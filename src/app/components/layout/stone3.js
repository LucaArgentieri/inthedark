import React from "react";
import { textData } from "../../assets/data/text";

export default function Stone3() {
  return (
    <div className="stone3 flex flex_column">
      <div>
        <p className="nobleman fs-96 upcase">archeoastronomy</p>
        <p className="nobleman fs-160 upcase"> OF STONEHENGE</p>
      </div>
      <div className="full">
        <img src={textData.stonehenge[0].upperImage} alt="" />
      </div>
      <div className="text_container flex">
        <div>
          <p className="nobleman fs-24">
            The first to notice this alignment was William Stukeley, an English
            physician who made a great contribution in the study of the site of
            Stonehenge, due to the millenary motions of our planet the
            inclination of the ecliptic varies from century to century, giving
            rise to a slight variation to the point of sunrise and sunset of the
            Sun
          </p>
        </div>
        <div>
          <img src={textData.stonehenge[0].upperImage} alt="" />
          <p className="nobleman fs-24">
            Because of that, the point of sunrise and sunset at the solstices of
            the third millennium BC had to be slightly different from what we
            can observe today.
          </p>
        </div>
      </div>
    </div>
  );
}
