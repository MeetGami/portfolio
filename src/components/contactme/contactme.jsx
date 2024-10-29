import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './contactme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import any icon
import contactme from "../../assets/contact-me.svg"
const ContactMe = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // optional, sets animation duration
          once: false, // whether animation should happen only once
        });
      }, []);
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('meet97gami@gmail.com');
        alert('Email address copied to clipboard!');
    };
    return(
        <div className="contactme" data-aos="zoom-in">
            <div className="heading">
                <h4>Contact Me</h4>
            </div>
            <div className="container" data-aos="zoom-in">
                <div className="card">
                    <div className="col-md-5">
                        <img className="contactimg" src={contactme} />
                    </div>
                    <div className="col-md-7">
                        <div className="contact-tag-line">
                            <p className="description1" data-aos="fade-down">"Let’s Turn Your Ideas into Reality!"</p>
                            <p className="description2" data-aos="fade-down">Got a project in mind or a creative spark that needs igniting? Don’t hesitate to reach out! I’m here to bring your vision to life and craft something extraordinary together. Your dream is just a message away!</p>
                        </div>
                        <div className="contact-mail">
                            <button className="btn btn-warning" onClick={handleCopyEmail}>
                                <FontAwesomeIcon icon={faEnvelope} size="3x" color="white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactMe;