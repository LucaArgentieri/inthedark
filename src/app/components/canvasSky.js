import React, { useRef, useEffect } from "react";

export default function CanvasSky() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

  //Stelle fisse
    function randomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function createStars(width, height, spacing) {
      const stars = [];

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const star = {
            x: x + randomInt(spacing),
            y: y + randomInt(spacing),
            r: Math.random() * maxStarRadius,
          };
          stars.push(star);
        }
      }
      return stars;
    }

    function fillCircle(ctx, x, y, r, fillStyle) {
      ctx.beginPath();
      ctx.fillStyle = fillStyle;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    function getOpacity(factor) {
      const opacityIncrement =
        (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
      const opacity = minStarOpacity + opacityIncrement;
      return opacity;
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(function (star, i) {
        const factor = counter * i;
        const x = star.x;
        const y = star.y;
        const opacity = getOpacity(factor);
        fillCircle(ctx, x, y, star.r, `rgba(255, 255, 255, ${opacity}`);
      });



      counter++;
      requestAnimationFrame(render);
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const maxStarRadius = 1.5;
    const minStarOpacity = 0.1;
    const maxStarOpacity = 0.7;
    const stars = createStars(width, height, 30);

    canvas.width = width;
    canvas.height = height;

    let counter = 0;

    render();
  }, []);

  return <canvas ref={canvasRef} />;
}
