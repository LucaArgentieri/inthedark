import { useEffect, useState } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <div className="cursor" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
}
