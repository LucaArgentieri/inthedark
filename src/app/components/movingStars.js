import React, { useEffect, useRef } from "react";

export default function Loader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    var cW = canvas.width;
    var cH = canvas.height;

    var movingStarts = [];

    function addStar() {
      var x = Math.floor(Math.random() * cW);
      var y = Math.floor(Math.random() * cH) + 1;
      var s = Math.floor(Math.random() * 15) + 1;

      movingStarts.push({ x: x, y: y, s: s });
    }

    function starField() {
      addStar();
      for (var i = 0; i < movingStarts.length; i++) {
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(
          movingStarts[i].x++,
          movingStarts[i].y,
          movingStarts[i].s * 0.15,
          movingStarts[i].s * 0.15
        );
        ctx.fill();
        if (movingStarts[i].x > cW) {
          movingStarts.splice(i, 1);
        }
      }
    }

    function animate() {
      ctx.save();
      ctx.clearRect(0, 0, cW, cH);
      starField();
      ctx.restore();
    }

    const animateInterval = () => {
      setInterval(animate, 60);
    };

    animateInterval();
  }, []);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }}/>;
}
