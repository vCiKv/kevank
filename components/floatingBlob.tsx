"use client";
import { useState, useEffect } from "react";
interface MouseCord {
  x: undefined | number;
  y: undefined | number;
}
const useMousePosition = (delayMs?: number): MouseCord => {
  const [mousePosition, setMousePosition] = useState<MouseCord>({
    x: undefined,
    y: undefined,
  });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({
        x: Number(ev.clientX?.toFixed()),
        y: Number(ev.clientY?.toFixed()),
      });
      //mousePosition.current = { x: Number(ev.clientX?.toFixed()), y: Number(ev.clientY?.toFixed()) }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
function FloatingBlob({
  duration = 2000, size = 250,
}: {
  size?: number;
  duration?: number;
}) {
  const mousePos = useMousePosition();
  const { x, y } = mousePos;
  // const moveStyle = useSpring({
  //   from: { y: 50, x: 50 },
  //   to: { x: x, y: y },
  //   delay: 100,
  // });
  return (
    <div className="w-full max-w-screen">
      <div
        className={"-z-50 animate-slowRotate fixed overflow-hidden bg-gradient-to-l from-purple-600/60 to-sky-800/70 rounded-full md:size-[250px] size-[100px]"}
        style={{
          transform: `translate(${-50}%,${-50}%)`,
          left: x + "px",
          top: y + "px",
          // height: size ?? 250 + "px",
          // width: size ?? 250 + "px",
          // ...moveStyle,
        }}
      ></div>
      <div className="h-full w-full max-h-screen max-w-screen fixed top-0 overflow-y-hidden -z-30 backdrop-blur-[200px]"></div>
    </div>
  );
}
export default FloatingBlob;
