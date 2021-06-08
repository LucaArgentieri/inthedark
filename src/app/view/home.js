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
} from "../animations/animations";

import { Link } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      rotateLogo();
      animateText();
    } else {
      rotateLogo();
    }
  }, [isLoading]);

  setTimeout(() => {
    setIsLoading(true);
  }, 3000);

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
          <img className="logo" src={Logo} alt="logo" />
        )}
      </div>

      <CanvasSky />
      <MovingStars />
    </div>
  );
}
