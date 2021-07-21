import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FirstIntro from "../assets/images/firstIntro.webp";
import SecondIntro from "../assets/images/secondIntro.webp";
import { animateHomeText } from "../animations/animations";
import { click, hover } from "../animations/sounds";
export default function IntroText() {
  useEffect(() => {
    animateHomeText();
  }, []);
  return (
    <div className="intro_main">
      <div className="introtext_title flex flex_center flex_column">
        <p className="nobleman italic fs-103 ">Archeoastronomy</p>
      </div>
      <p className="sub nobleman fs-96">A welcome into a world yet unknown</p>

      <div className="introtext_column flex">
        <div className="flex flex_hcenter">
          <p className="fs-30 noblemantext">
            Archeoastronomy is the interdisciplinary or multidisciplinary study
            of how people in the past "have understood the phenomena in the sky,
            how they used these phenomena and what role the sky played in their
            cultures”. Archeoastronomy considers in a richly symbolic way the
            cultural interpretations of many celestial phenomena, present in
            various ancient cultures. It is often twinned with ethnoastronomy,
            the anthropological study of skywatching in contemporary societies.
            This discipline is also closely associated with historical
            astronomy, the use of historical records of heavenly events to
            answer astronomical problems and the history of astronomy which uses
            written records to evaluate past astronomical practice.
          </p>
        </div>
        <div className="flex flex_column flex_hcenter">
          <img src={FirstIntro} alt="" />
          <img src={SecondIntro} alt="" />
        </div>
      </div>
      <div className="introtext_column2">
        <p className="fs-30 noblemantext"></p>
      </div>
      <div className="introtext_column tre flex flex_reverse">
        <div className="flex flex_hcenter ">
          <p className="fs-30 noblemantext">
            Archeoastronomy makes use of current cultural knowledge to encourage
            a better understanding of the historical documentation.
            Archeoastronomy uses a variety of methods to uncover evidence of
            past practices including archaeology, anthropology, astronomy,
            statistics and probability, and history.
          </p>
        </div>
        <div className="flex flex_column flex_hcenter ">
          <img src={FirstIntro} alt="" />
        </div>
      </div>
      <div className="introtext_column2 quattro">
        <p className="fs-30 noblemantext">
          Archeoastronomy can be applied to all cultures and all time periods.
          The meanings that come from the observation of the sky can depend from
          culture to culture; however there are scientific methods which can be
          applied across cultures when examining ancient beliefs and with which
          we can reach archaeoastronomy interpretations.
        </p>
        <Link className="flex flex_center introbtn" to="/experience">
          <button
            onMouseEnter={() => hover()}
            onClick={() => click()}
            className="fs-24 nobleman"
          >
            Archeoastronomy <br /> sites
          </button>
        </Link>
      </div>
    </div>
  );
}
