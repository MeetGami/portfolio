import React,{useEffect} from "react";
import "./home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import StarryBackground from "../aboutme/stareffect/stareffect";
import Navbar from "../navbar/navbar";
import Greet from "../greet/greet";
import Project from "../project/project";
import AboutMe from "../aboutme/aboutme";
import Skill from "../skills/skill";
import ContactMe from "../contactme/contactme";
import facebookimg from "../../assets/facebook-integration.svg";
import erpcrmimg from "../../assets/erp-crm.svg";
import hrmsimg from "../../assets/hrms.svg";
import dataimportimg from "../../assets/data-import.svg";
import mailintegrationimg from "../../assets/mail-integration.svg";
import telephonyintegrationimg from "../../assets/telephony-integration.svg";
const Home = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // optional, sets animation duration
          once: false, // whether animation should happen only once
        });
      }, []);
    const projectarr = [{
        title: 'Facebook Integration',
        description: "Developed an automated system to integrate Facebook leads directly into the company’s CRM, reducing manual errors and improving lead capture efficiency. Created an spontaneous frontend for easy field mapping and used backend job scheduling for timely lead updates, significantly enhancing data accuracy and boosting sales conversion potential.",
        technologies: ['Node','React','Express','Figma','MongoDB'],
        githubLink: 'https://github.com/Gami-Yash/LibManagement',
        imageUrl: facebookimg,
      },
      {
        title: 'IVR Integration / Cloud Telephony',
        description: "Developed an advanced IVR system to streamline call handling, connecting customers with the right agents based on skill and availability. Enabled voicemail and email notifications for missed calls, while maintaining detailed call logs to enhance customer satisfaction and boost agent productivity.",
        technologies: ['Python', 'Django','Postgres','MERN'], 
        githubLink: 'https://github.com/Gami-Yash/ERP-Main',
        imageUrl: telephonyintegrationimg,
      },{
        title: 'ERP & CRM System',
        description: "Enhanced ERP and CRM systems by building a task management system and dynamic dashboards for better task tracking and data visualization. Developed a TODO ticket management tool and perceptive dashboards for key metrics, optimizing user interactions and reducing errors with JavaScript validation.",
        technologies: ['Python', 'Django','Postgres','MERN'], 
        githubLink: 'https://github.com/Gami-Yash/ERP-Main',
        imageUrl: erpcrmimg,
      },{
        title: 'Mail Integration',
        description: "Automated data extraction from emails with a custom JAR file, integrating information directly into the company’s internal system for improved accuracy and reduced manual entry. Implemented a CRON job to parse emails and update the system automatically, ensuring consistent data and responsive processing.",
        technologies: ['Python', 'Django','Postgres','MERN'], 
        githubLink: 'https://github.com/Gami-Yash/ERP-Main',
        imageUrl: mailintegrationimg,
      },{
        title: 'Data Import and Export Solutions',
        description: "Built robust data export/import solutions to streamline data handling, enabling users to select fields for Excel export for custom analysis, and import data efficiently from frontend and backend to simplify entry processes.",
        technologies: ['Python', 'Django','Postgres','MERN'], 
        githubLink: 'https://github.com/Gami-Yash/ERP-Main',
        imageUrl: dataimportimg,
      },{
        title: 'HRMS System',
        description: "Developed a streamlined HRMS product to optimize employee management, from onboarding to performance tracking. Integrated features like attendance, leave management, and payroll, enhancing HR efficiency and user experience.",
        technologies: ['Python', 'Django','Postgres','MERN'], 
        githubLink: 'https://github.com/Gami-Yash/ERP-Main',
        imageUrl: hrmsimg,
      }]
    return(
        <div className="App" id="scroll">
            <StarryBackground/>
            <Navbar/>
            <Greet/>
            <div id="projects"></div>
            <div className="project" data-aos="zoom-in">
                <div className="heading">
                    <h4>Project's</h4>
                </div>
                <div className="container" data-aos="zoom-in">
                    {projectarr.map((project, index) => (
                        <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies} 
                        demoLink={project.githubLink}
                        imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </div>
            <StarryBackground/>
            <AboutMe/>
            <Skill/>
            <ContactMe/>
        </div>
    )
}

export default Home;