import React, { useEffect, useState } from "react";
import Logo from "../assets/svg/logo.svg";
import Stonehenge from "../assets/images/STONEHENGE.webp";
import CanvasSky from "../components/canvasSky";
import MovingStars from "../components/movingStars";
import {
  rotateLogo,
  animateText,
  hoverBtn,
  removeHoverBtn,
  rotateLogoLoader,
  goToIntroText,
} from "../animations/animations";

import IntroText from "../components/IntroText";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { click, stonSound } from "../animations/sounds";
gsap.registerPlugin(ScrollToPlugin);
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);

    if (isLoading) {
      stonSound();
      animateText();
      rotateLogo();
    } else {
      rotateLogoLoader();
    }
  }, [isLoading]);

  const moveToText = () => {
    click();
    goToIntroText();
  };

  return (
    <>
      <div className="home">
        <div className="home_container flex flex_center flex_column">
          {isLoading ? (
            <>
              <img className="logo" src={Logo} alt="logo" />
              <p className="title c-white fs-96 nobleman upcase">in the dark</p>
              <p className="subtitle nobleman regular c-white fs-36">
                How the ancients discovered astronomy
              </p>
              <a
                onMouseEnter={hoverBtn}
                onMouseLeave={removeHoverBtn}
                onClick={moveToText}
                className="enter_btn fs-36 c-white nobleman"
              >
                Enter
                <span className="line"></span>
              </a>
              <span className="stonehenge">
                <img src={Stonehenge} alt="" />
              </span>
            </>
          ) : (
            <img className="loader" src={Logo} alt="logo" />
          )}
        </div>

        <CanvasSky />
        <MovingStars />
      </div>
      <IntroText />
    </>
  );
}
