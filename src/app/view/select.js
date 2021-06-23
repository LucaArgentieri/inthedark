import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import { selectOver, removeOver, resetCursor } from "../animations/animations";

export default function Select() {
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
          onClick={resetCursor}
          className="stonehenge flex flex_center flex_column"
        >
          <p className="nobleman c-white regular fs-64 upcase">stonehenge</p>
          <p className="athiti regular fs-24 c-white">
            Discover the sky through the eyes of the ancients
          </p>
        </Link>

        <Link
          className="pyramid flex flex_center flex_column"
          to="/experience/gyza-pyramid"
          onMouseEnter={(e) => selectOver(e)}
          onMouseLeave={(e) => removeOver(e)}
          onClick={resetCursor}
        >
          <p className="nobleman regular fs-48 upcase c-white">
            piramide di cheope
          </p>
          <p className="athiti regular fs-24 c-white">
            Discover the sky through the eyes of the ancients
          </p>
        </Link>
      </div>
    </div>
  );
}
