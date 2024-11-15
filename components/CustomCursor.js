"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    // Track the mouse position
    const moveCursor = (e) => {
      const cursorSize = 40; // Adjust this if the size of the cursor changes
      const offset = cursorSize / 2; // To align the sharp tip with the center of the circle
      cursor.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
    };

    document.addEventListener("mousemove", moveCursor); // Attach the mousemove event

    // Add hover effect listeners for interactive elements
    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseover", () => setIsHovered(true));
      element.addEventListener("mouseleave", () => setIsHovered(false));
    });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`cursor fixed top-0 left-0 w-10 h-10 rounded-full bg-accent pointer-events-none z-[9999] ${
        isHovered ? "scale-150 glow" : "scale-100"
      }`}
    />
  );
};

export default CustomCursor;
