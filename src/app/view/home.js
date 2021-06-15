import React, { useEffect, useState } from "react";
import Logo from "../assets/svg/logo.svg";
import Stonehenge from "../assets/images/STONEHENGE.png";
import CanvasSky from "../components/canvasSky";
import MovingStars from "../components/movingStars";
import {
  rotateLogo,
  animateText,
  hoverBtn,
  removeHoverBtn,
  rotateLogoLoader,
} from "../animations/animations";

import Intro from "../view/Intro";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const moveToText = () => {
    gsap.to(window, {
      scrollTo: ".text_box",
      duration: 0.5,
    });

    gsap.to("body", {
      overflow: "scroll",
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);

    if (isLoading) {
      animateText();
      rotateLogo();
    } else {
      rotateLogoLoader();
    }
  }, [isLoading]);

  return (
    <>
      <div className="home">
        <div className="home_container flex flex_center flex_column">
          {isLoading ? (
            <>
              <img className="logo" src={Logo} alt="logo" />
              <p className="title c-white fs-96 nobleman upcase">in the dark</p>
              <p className="subtitle athiti regular c-white fs-36">
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
      <Intro />
    </>
  );
}
