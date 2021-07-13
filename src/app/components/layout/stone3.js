import React from "react";
import img from "../../assets/images/image2.webp";
import img2 from "../../assets/images/image3.webp";

export default function Stone3() {
  return (
    <div className="stone3 flex flex_column">
      <div>
        <p className="nobleman fs-96 upcase">archeoastronomy</p>
        <p className="nobleman fs-160 upcase"> OF STONEHENGE</p>
      </div>
      <div className="stone3_img full">
        <img src={img} alt="" />
      </div>
      <div className="text_container flex">
        <div>
          <p className="noblemantext fs-24 bettertext">
            The first to notice this alignment was William Stukeley, an English
            physician who made a great contribution in the study of the site of
            Stonehenge, due to the millenary motions of our planet the
            inclination of the ecliptic varies from century to century, giving
            rise to a slight variation to the point of sunrise and sunset of the
            Sun
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="noblemantext fs-24 bettertext">
            Because of that, the point of sunrise and sunset at the solstices of
            the third millennium BC had to be slightly different from what we
            can observe today.
          </p>
        </div>
      </div>
    </div>
  );
}
