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

import { Link } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="home">
      <div className="home_container flex flex_center flex_column">
        {isLoading ? (
          <>
            <img className="logo" src={Logo} alt="logo" />
            <p className="title c-white fs-96 nobleman upcase">in the dark</p>
            <p className="subtitle athiti regular c-white fs-36">
              How the ancients discovered astronomy
            </p>
            <Link
              onMouseEnter={hoverBtn}
              onMouseLeave={removeHoverBtn}
              to="/"
              className="enter_btn fs-36 c-white nobleman"
            >
              Enter
              <span className="line"></span>
            </Link>
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
  );
}
