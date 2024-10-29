import React,{useEffect} from "react";
import './greet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import any icon
import { Typewriter } from 'react-simple-typewriter'; // Import the Typewriter component
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import from brands icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import from brands icons
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import from brands icons
import TextScramble from "./textscramble";
import AnimatedWord from "./animatedword";
import DA1 from '../../assets/heroImg.svg';
import DA11 from '../../assets/herolmg1.webp';
const Greet = () =>{
  return(
        <div>
        <div id="home" className=''>
          <div className="home-content container">
            <div className="row">
              <div className="home-header col-md-7">
                <h1 className="heading" style={{ paddingBottom: "15px" }}>
                  Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name" style={{display: "flex",gap: "15px",alignItems: "baseline"}}>
                  {/* I'M <strong className="main-name"> Meet Gami</strong> */}
                  I'M <strong className="main-name"> <AnimatedWord/></strong>
                </h1>
                <div style={{ padding: "50px 50px 0px 50px", textAlign: "left" }}>
                <TextScramble/>
                  <div className="social-icons">
                    <a className="social-icon instagram"><FontAwesomeIcon icon={faInstagram} size="3x" color="white" /></a>
                    <a className="social-icon github"><FontAwesomeIcon icon={faGithub} size="3x" color="white" /></a>
                    <a className="social-icon gmail"><FontAwesomeIcon icon={faEnvelope} size="3x" color="white" /></a>
                    <a className="social-icon linkedin"><FontAwesomeIcon icon={faLinkedin} size="3x" color="white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img src={DA11} alt="home pic" className="img-fluid d-none" style={{ maxHeight: "350px", borderRadius: "10px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Greet;