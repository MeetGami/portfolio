import React, { useEffect, useRef } from 'react';
import './textscramble.css'; 
const TextScramble = () => {
  return (
    <div className="content">
      <div className="content__container">
        <ul className="content__container__list">
          <li className="content__container__list__item">FullStack Developer</li>
          <li className="content__container__list__item">Web Developer</li>
          <li className="content__container__list__item">Tech Enthusiast's</li>
          <li className="content__container__list__item">FullStack Developer</li>
        </ul>
      </div>
    </div>
  );
};

export default TextScramble;