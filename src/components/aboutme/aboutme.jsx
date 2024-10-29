import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './aboutme.css'
import aboutme from "../../assets/about-me.svg"
const AboutMe = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // optional, sets animation duration
          once: false, // whether animation should happen only once
        });
      }, []);
    return(
        <div className="aboutme" id="aboutme" data-aos="zoom-in">
            <div className="heading">
                <h4>About Me</h4>
            </div>
            <div className="container" data-aos="zoom-in">
                <div className="card">
                    <div className="col-md-5">
                        <img className="aboutimg" src={aboutme} />
                    </div>
                    <div className="col-md-7">
                        <p className="description" data-aos="fade-down">Experienced Senior Full Stack Java Developer with 4.5 years of hands-on expertise in backend development, frontend architecture, and building high-performance, responsive web applications.</p>
                        <p className="description" data-aos="fade-down">Proficient in core technologies like Java, JavaScript, Python, HTML, and CSS, as well as popular frameworks like React.js, enabling the creation of intuitive, user-centered designs.</p>
                        <p className="description" data-aos="fade-down">Demonstrated skill in developing robust APIs, optimizing system performance, and enhancing overall web functionality.</p>
                        <p className="description" data-aos="fade-down">Possesses a solid background in ERP and CRM systems, with extensive experience in managing MySQL, PostgreSQL, and other RDBMS, alongside a deep familiarity with Linux server environments.</p>
                        <p className="description" data-aos="fade-down">Known for strong communication and problem-solving abilities, consistently delivering reliable, scalable solutions that align with business objectives and improve user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;