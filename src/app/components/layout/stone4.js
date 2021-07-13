import React from "react";
import { textData } from "../../assets/data/text";

export default function Stone4() {
  return (
    <div className="stone3 flex flex_column">
      <div>
        <p className="nobleman fs-96 upcase">1966 - newman </p>
        <p className="nobleman fs-160 upcase"> STONEHENGE’s</p>
        <p className="nobleman fs-96 upcase">HYPOTHESIS </p>
      </div>

      <div className="text_container flex">
        <div>
          <p className="noblemantext fs-24 bettertext">
            An interesting hypothesis is that of Newman of 1966 about the
            alignment of the lunar motions. The Station stones seem to describe
            a rectangle in which the two short sides are in the same direction
            as the axis of the monument and point towards the sunrise and sunset
            of the solstices. <br /> The two long sides instead point instead
            where the Moon rises and sets at the lunastice (the moment in which
            the location reaches the maximum inclination value with respect to
            the celestial equator) and in the case in which the lunar dawn
            occurs more southeast as possible.
          </p>
        </div>
        <div>
          <img src={textData.stonehenge[0].upperImage} alt="" />
          <p className="noblemantext fs-24 bettertext">
            It isn’t possible to exclude that the reason of the satellite of
            Stonehenge was chosen precisely because of that, but an action of
            this type would have required many repeated measures over the years
            and an almost scientific methodological approach that could be
            extemporaneous for the men of the time and, if there had been, then
            it is not clear why a region still further south, towards the
            English Channel, was not chosen.
          </p>
        </div>
      </div>
    </div>
  );
}
