import React from 'react';
import './index.css';
import img from '../o_pior.png';
import memory from '../gameOver.png';
import LeftArrow from '../arrow_buttons/leftArrow';
import RightArrow from '../arrow_buttons/rightArrow';

export default function ProjectsSection(props){
    
    return (
        <div className="projects-container">
            <LeftArrow />
            <div className="projects-section">
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={img} alt="project-overview" />

                </div>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={memory} alt="project-overview" />

                </div>
                
            </div>
            <RightArrow />
        </div>
    );
}
