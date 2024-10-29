import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './skill.css'
import javasvg from '../../assets/java-svgrepo-com.svg';
import jssvg from '../../assets/javascript-svgrepo-com.svg';
import pythonsvg from '../../assets/python-svgrepo-com.svg';
import htmlsvg from '../../assets/html5-02-svgrepo-com.svg';
import csssvg from '../../assets/css3-02-svgrepo-com.svg';
import jquerysvg from '../../assets/jquery-svgrepo-com.svg';
import reactsvg from '../../assets/react-svgrepo-com.svg';
import mysqlsvg from '../../assets/mysql-logo-svgrepo-com.svg';
import psqlsvg from '../../assets/postgresql-svgrepo-com.svg';
import jspsvg from '../../assets/jsp-file-format-symbol-svgrepo-com.svg';
import bootstrapsvg from '../../assets/bootstrap-fill-svgrepo-com.svg';

const Skill = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // optional, sets animation duration
          once: false, // whether animation should happen only once
        });
      }, []);
    return (
        <div className="skill" data-aos="zoom-in">
            <div className="heading">
                <h4>Skills & Language's</h4>
            </div>
            <div className="container" data-aos="zoom-in">
                <div className="card">
                    <div className="imageheader">
                        <img src={javasvg}></img>
                        <img src={jssvg}></img>
                        <img src={pythonsvg}></img>
                        <img src={htmlsvg}></img>
                        <img src={csssvg}></img>
                        <img src={jquerysvg}></img>
                        <img src={reactsvg}></img>
                        <img src={mysqlsvg}></img>
                        <img src={psqlsvg}></img>
                        <img src={jspsvg}></img>
                        <img src={bootstrapsvg}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill;