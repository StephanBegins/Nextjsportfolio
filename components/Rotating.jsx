// components/RotatingText.js
import { useEffect, useState } from 'react';

const RotatingText = () => {
  const phrases = ['Data Scientist', 'Data Analyst', 'AI Engineer', 'AI/ML Developer', 'ML Engineer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="rotating-text">
      {phrases[index]}
    </span>
  );
};

export default RotatingText;
