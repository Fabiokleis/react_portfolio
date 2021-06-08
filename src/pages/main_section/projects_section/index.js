import React,{useState} from 'react';
import './index.css';
import img from '../o_pior.png';
import memory from '../gameOver.png';

export default function ProjectsSection(props){
    const [value, setValue] = useState(-400);

    function toLeft(){
        if(value !== 0) {
            return setValue(400 + value);
        };

    }

    function toRight(){
        if(value > -800){
            return setValue(-400 + value);
        }
    }

    return (
        <div className="projects-container">
            <div className="arrow-container-left">
                <button className="arrow-left" onClick={toLeft}>{"<"}</button>
            </div>
            <div className="projects-section" style={{marginLeft: `${value}px` , marginRight: `${value}px`}}>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={img} alt="project-overview" />

                </div>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={memory} alt="project-overview" />

                </div>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={memory} alt="project-overview" />

                </div>
            </div>
            <div className="arrow-container-right" onClick={toRight}>
                <button className="arrow-right">{">"}</button>
            </div>

        </div>
    );
}
