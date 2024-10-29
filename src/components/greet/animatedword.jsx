import React, { useEffect, useRef, useState } from 'react';
// import './animatedWord.css'; // Assuming you place your CSS in this file
import "./animatedword.css"

const AnimatedWord = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const spansRef = useRef([]);

  const letters = ['M', 'E', 'E', 'T', '-', 'G', 'A', 'M', 'I'];

  // Function to handle the animation for the active letter
  const animateLetter = (index) => {
    const span = spansRef.current[index];
    if (span) {
      span.classList.add('active');
      span.addEventListener('animationend', () => {
        span.classList.remove('active');
      });
    }
  };

  // Use effect to animate the active letter continuously
  useEffect(() => {
    let intervalId;
    
    const stopAnimationTimeout = setTimeout(() => {
      clearInterval(intervalId); // Stop the animation after 4 seconds
    }, 4000); 

    intervalId = setInterval(() => {
      animateLetter(activeIndex);
      if(activeIndex == 8)
      {
        return;
      }
      setActiveIndex((prevIndex) => (prevIndex + 1) % letters.length);
    }, 1000); // Change the active letter every second

    return () => {
      clearInterval(intervalId);
      clearTimeout(stopAnimationTimeout); // Cleanup to stop the animations
    };
  }, [activeIndex]);

  // Initial animation for the first letter
  useEffect(() => {
    animateLetter(activeIndex); // Animate the first letter on mount
  }, []);

  return (
    <div className="word">
      {letters.map((letter, index) => (
        <span
          key={index}
          ref={(el) => (spansRef.current[index] = el)}
          onClick={() => animateLetter(index)} // Click to animate
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimatedWord;