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
            <div style={{padding:"30px 0px"}}>
                <h4>Contact Me</h4>
            </div>
            <div className="container" data-aos="zoom-in">
                <div className="card" style={{display: "flex",flexDirection:"row",alignItems:"center",justifyContent:"center",height:"510px",boxShadow:"none",border:"0px"}}>
                    <div className="col-md-5">
                        <img style={{width:"100%",height:"100%"}} src={contactme} />
                    </div>
                    <div className="col-md-7">
                        <div style={{display: "flex",flexDirection: "column",gap: "80px",alignItems:"center"}}>
                            <p className="description" data-aos="fade-down" style={{margin: "-100px 0px 0px 0px",fontSize: "40px",fontFamily: "fantasy"}}>"Let’s Turn Your Ideas into Reality!"</p>
                            <p className="description" data-aos="fade-down" style={{fontSize: "20px",padding:"0px 20px"}}>Got a project in mind or a creative spark that needs igniting? Don’t hesitate to reach out! I’m here to bring your vision to life and craft something extraordinary together. Your dream is just a message away!</p>
                        </div>
                        <div style={{gap: "10px",display: "flex",justifyContent: "center",alignItems: "center"}}>
                            <button className="btn btn-warning" onClick={handleCopyEmail} style={{borderRadius: "10px",padding: "0px 5px",fontSize: "13px"}}>
                                <FontAwesomeIcon icon={faEnvelope} size="3x" color="white" />
                            </button>
                            {/* <div class="callout top">test</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactMe;