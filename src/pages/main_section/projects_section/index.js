import React from 'react';
import './index.css';
import img from '../o_pior.png';
export default function ProjectsSection(props){
    
    return (
        <div className="projects-section">
            <div className="projects-card">
                <img className="projects-img" src={img} alt="project-overview" />
            </div>
           
        </div>
    );
}
