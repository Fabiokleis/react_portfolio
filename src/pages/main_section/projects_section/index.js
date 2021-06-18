import React,{useState, useEffect} from 'react';
import './index.css';
import img from '../o_pior.png';
import memory from '../gameOver.png';

export default function ProjectsSection(props){
    const [value, setValue] = useState(-400);
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    function toLeft(){
        if(value !== 0) {
            return setValue(400 + value);
        };

    }

    function toRight(){
        if(value > (400-((maxWidth/2)*3))){
            return setValue(-400 + value);
        }
    }

    return (
        <div className="projects-container" width={(maxWidth/2)*3}>
            <div className="arrow-container-left">
                <button className="arrow-left" onClick={toLeft}>{"<"}</button>
            </div>
            <div className="projects-section" style={{marginLeft: `${value}px` , marginRight: `${value}px`}}>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={img} 
                            alt="project-overview" width={maxWidth/2} />

                </div>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={memory} alt="project-overview" width={maxWidth/2}/>

                </div>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={memory} alt="project-overview" width={maxWidth/2} />

                </div>
            </div>
            <div className="arrow-container-right" onClick={toRight}>
                <button className="arrow-right">{">"}</button>
            </div>

        </div>
    );
}
