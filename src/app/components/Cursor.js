import React, { useRef, useEffect } from "react";
import P5Wrapper from "react-p5-wrapper";

const useDOMControl = (domFunc) => {
  const domRef = useRef();

  useEffect(() => {
    domFunc(domRef.current);
  });

  return <div ref={domRef}></div>;
};

function Cursor() {
  let img;

  const sketch = (p) => {
    let x = 1;
    let y = 1;
    let easing = 0.05;

    p.setup = function () {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.noStroke();
    };
    p.draw = function () {
      p.clear();
      let targetX = p.mouseX;
      let dx = targetX - x;
      x += dx * easing;
      let targetY = p.mouseY;
      let dy = targetY - y;
      y += dy * easing;
      p.ellipse(x, y, 20, 20);
    };
  };
  return (
    <div className="cursor">
      <P5Wrapper sketch={sketch} />
    </div>
  );
}

export default Cursor;