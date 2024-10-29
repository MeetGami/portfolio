import React from 'react';
import styled, { keyframes } from 'styled-components';

const starFieldWidth = 2560;
const starFieldHeight = 2560;
const starStartOffset = '600px';

const starOneScrollDuration = '100s';
const starTwoScrollDuration = '125s';
const starThreeScrollDuration = '175s';
const numStarOneStars = 1000;
const numStarTwoStars = 700;
const numStarThreeStars = 200;
const numShootingStars = 60;

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
//   background: white;
`;


const createStars = (n) => {
  return Array.from({ length: n }, () => {
    const x = Math.random() * starFieldWidth;
    const y = Math.random() * starFieldHeight;
    return `${x}px ${y}px black`;
  }).join(', ');
};

const animateStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-${starFieldHeight}px) translateX(-${starFieldWidth}px);
  }
`;

const animateShootingStar = keyframes`
  from {
    transform: translateY(0px) translateX(0px) rotate(-45deg);
    opacity: 1;
    height: 5px;
  }
  to {
    transform: translateY(-${starFieldHeight}px) translateX(-${starFieldWidth}px) rotate(-45deg);
    opacity: 1;
    height: 800px;
  }
`;

const Star = styled.div`
  z-index: 10;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: transparent;
  box-shadow: ${() => createStars(numStarOneStars)};
  animation: ${animateStar} ${starOneScrollDuration} linear infinite;

  &:after {
    content: '';
    top: -${starStartOffset};
    width: ${(props) => props.size}; 
    height: ${(props) => props.size};
    border-radius: 50%;
    position: absolute;
    background: transparent;
    box-shadow: ${() => createStars(numStarOneStars)};
  }
`;

const ShootingStar = styled.div`
  z-index: 10;
  width: 5px;
  height: calc(5px + 80px);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  animation: ${animateShootingStar} 10s linear infinite;
`;

const StarryBackground = () => {
  return (
    <Container>
      <div className="stars">
        <Star size="1px" />
      </div>
      <div className="stars1">
        <Star size="2px" style={{ animationDuration: starTwoScrollDuration }} />
      </div>
      <div className="stars2">
        <Star size="3px" style={{ animationDuration: starThreeScrollDuration }} />
      </div>
      <div className="shooting-stars">
        {Array.from({ length: numShootingStars }).map((_, index) => (
          <ShootingStar key={index} />
        ))}
      </div>
    </Container>
  );
};

export default StarryBackground;