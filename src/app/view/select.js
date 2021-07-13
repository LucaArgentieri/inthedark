import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import { selectOver, removeOver } from "../animations/animations";
import { click, stonSound, gizaSound } from "../animations/sounds";

export default function Select() {
  const clickStonehange = () => {
    stonSound();
    click();
  };
  const clickGiza = () => {
    gizaSound();
    click();
  };
  return (
    <div className="select">
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
      </Link>
      <div className="select_container flex">
        <Link
          to="/experience/stonehenge"
          onMouseEnter={(e) => selectOver(e)}
          onMouseLeave={(e) => removeOver(e)}
          onClick={() => clickStonehange()}
          className="stonehenge flex flex_center flex_column"
        >
          <p className="nobleman c-white regular fs-64 upcase">stonehenge</p>
          <p className="nobleman regular fs-24 c-white">
            Discover the sky through the eyes of the ancients
          </p>
        </Link>

        <Link
          className="pyramid flex flex_center flex_column"
          to="/experience/gyza-pyramid"
          onMouseEnter={(e) => selectOver(e)}
          onMouseLeave={(e) => removeOver(e)}
          onClick={() => clickGiza()}
        >
          <p className="nobleman regular fs-64 upcase c-white">
            Pyramid <br /> of Cheops
          </p>
          <p className="nobleman regular fs-24 c-white">
            Discover the sky through the eyes of the ancients
          </p>
        </Link>
      </div>
    </div>
  );
}
