import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import { selectOver, removeOver } from "../animations/animations";

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
          className="stonehenge flex flex_center flex_column"
        >
          <p className="nobleman c-white regular fs-64 upcase">stonehenge</p>
          <p className="athiti regular fs-24 c-white">
            Discover the sky through the eyes of the ancients
          </p>
        </Link>

        <Link
          className="pyramid flex flex_center flex_column"
          to="/experience/cheops-pyramid"
          onMouseEnter={(e) => selectOver(e)}
          onMouseLeave={(e) => removeOver(e)}
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
