import React from "react";
import img from "../../assets/images/giza1.webp";

export default function pyramid1() {
  return (
    <div className="stone2 flex flex_column">
      <div className="title">
        <p className="nobleman fs-160 upcase">Pyramid</p>
        <p className="nobleman fs-96 upcase">of cheops</p>
      </div>
      <div className="text_container">
        <div className="flex pyramid1">
          <p className="noblemantext fs-24 bettertext">
            The Pyramid of Cheops, also known as the Great Pyramid of Giza, is
            the oldest and largest of the three main pyramids of the Giza
            necropolis. It’s the oldest of the seven wonders of the world as
            well as the only one that has arrived today not in a state of ruin.
          </p>
          <img src={img} alt="" />
        </div>
        <div className="flex">
          <p className="noblemantext fs-24 bettertext">
            It consists of at least 2 million and 300 thousand blocks, each
            weighing about 2.5 tons on average and, according to Egyptologists,
            built over a period of about 23 years.
          </p>
        </div>

        <div className="flex">
          <p className="noblemantext fs-24 bettertext">
            According to the established opinion and believed to be proven by
            the whole world, each block of 2.5 has been placed in any position
            and height, every 3 minutes, day and night, for over 20 years.
          </p>
        </div>
      </div>
    </div>
  );
}
