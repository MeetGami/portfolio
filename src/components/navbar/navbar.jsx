import React from "react";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import any icon
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import any icon
import { faChartLine } from '@fortawesome/free-solid-svg-icons'; // Import any icon
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Import any icon
const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          //section.scrollIntoView({ behavior: 'smooth' });
          if(sectionId == "aboutme")
          {
            section.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
          }
          else
          {
            section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
          }
          toggleMenu();
        }
      };
    return (
        <nav className="sticky navbar navbar-expand-md navbar-light fixed-top">
            <div className="container">
                <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                    <div className="ms-auto navbar-nav">
                    <div className="nav-item">
                        <a className="nav-link" onClick={() => scrollToSection('home')}><FontAwesomeIcon icon={faHome} size="1x" color="black" /> Home</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" onClick={() => scrollToSection('projects')}><FontAwesomeIcon icon={faChartLine} size="1x" color="black" /> Projects</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" onClick={() => scrollToSection('aboutme')}><FontAwesomeIcon icon={faUser} size="1x" color="black" /> About</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" onClick={() => {
                      
                      const link = document.createElement('a');
                      link.href = '/MeetGamiResume.pdf';
                      link.target='_blank'

                     
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);

                     
                      window.open('public/MeetGamiResume.pdf', '_blank');
                    }}><FontAwesomeIcon icon={faFileAlt} size="1x" color="black" /> Resume</a>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;