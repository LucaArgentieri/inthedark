import React, { useRef, useEffect } from "react";

export default function CanvasSky(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ctx.canvas.width = window.innerWidth;
    // ctx.canvas.height = window.innerHeight;

    // var cW = canvas.width;
    // var cH = canvas.height;

    // var stars = [];

    // function addStar() {
    //   var x = Math.floor(Math.random() * cW);
    //   var y = Math.floor(Math.random() * cH) + 1;
    //   var s = Math.floor(Math.random() * 15) + 1;

    //   stars.push({ x: x, y: y, s: s });
    // }

    // function starField() {
    //   addStar();
    //   for (var i = 0; i < stars.length; i++) {
    //     ctx.fillStyle = "rgba(255, 255, 255, 1)";
    //     ctx.fillRect(
    //       stars[i].x++,
    //       stars[i].y,
    //       stars[i].s * 0.15,
    //       stars[i].s * 0.15
    //     );
    //     ctx.fill();
    //     if (stars[i].x > cW) {
    //       stars.splice(i, 1);
    //     }
    //   }
    // }

    // function animate() {
    //   ctx.save();
    //   ctx.clearRect(0, 0, cW, cH);
    //   starField();
    //   ctx.restore();
    // }

    // var animateInterval = setInterval(animate, 60);

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
      // ctx.fillStyle = backgroundColor;
      // ctx.fillRect(0, 0, width, height);
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

    // const backgroundColor = "#030318";
    const width = window.innerWidth;
    const height = window.innerHeight;
    const maxStarRadius = 1.5;
    const minStarOpacity = 0.1;
    const maxStarOpacity = 0.7;
    const stars = createStars(width, height, 30);

    canvas.width = width;
    canvas.height = height;

    let counter = 0;

    render()
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}
