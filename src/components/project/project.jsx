import React, { useEffect }  from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './project.css'
const Project = ({ title, description, technologies, demoLink, imageUrl }) =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // optional, sets animation duration
          once: false, // whether animation should happen only once
        });
      }, []);
    
    return(
        <div className="card projects-card">
            <div className="image-container">
                <img src={imageUrl}/>
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}
export default Project;