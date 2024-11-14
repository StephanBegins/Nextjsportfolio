"use client";  // Mark this file as a client-side component

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    // Track the mouse position
    const moveCursor = (e) => {
      cursor.style.top = `${e.pageY - 10}px`;  // Follow mouse Y
      cursor.style.left = `${e.pageX - 10}px`; // Follow mouse X
    };

    document.addEventListener("mousemove", moveCursor); // Update cursor position on mouse move

    // Add event listeners for hover effect on links and buttons
    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseover", () => setIsHovered(true));
      element.addEventListener("mouseleave", () => setIsHovered(false));
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`cursor fixed top-0 left-0 w-10 h-10 rounded-full bg-accent transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-in-out ${
        isHovered ? "scale-150 glow" : "scale-100"
      }`}
    />
  );
};

export default CustomCursor;
