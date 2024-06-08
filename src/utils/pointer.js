import React, { useEffect, useRef } from 'react';
import "./pointer.css";



const Poniter = () => {
  const coordsRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  const colors = [
    "#C78EFF"
  ];

  useEffect(() => {
    circlesRef.current = document.querySelectorAll(".circle");
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      let x = coordsRef.current.x;
      let y = coordsRef.current.y;

      circlesRef.current.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    const handleMouseMove = (e) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="circle-container">
      {colors.map((color, index) => (
        <div key={index} className="circle" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

export default Poniter;

