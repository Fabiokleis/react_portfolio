import React,{useState, useEffect} from 'react';
import './index.css';
import img from '../o_pior.png';
import memory from '../gameOver.png';
import doubleRight from '../chevrons-right.svg';
import doubleLeft from '../chevrons-left.svg';


export default function ProjectsSection(props){
    const maxWidth = window.innerWidth;
    const [value, setValue] = useState(-400);
    const img_width = (maxWidth < 1300)?"500px":"700px";

    function toLeft(){
        if(value !== 0) {
            return setValue(400 + value);
        };

    }

    function toRight(){
        const min = (maxWidth < 750) ? -1000: -800;
        if(value > (min)){
            return setValue(-400 + value);
        }
    }

    return (
        <div className="projects-container">
            <div className="arrow-container-left" onClick={toLeft} >
                <img className="arrow-left" src={doubleLeft} alt="preview"/>
            </div>
            <div className="projects-section" style={{marginLeft: `${value}px` , marginRight: `${value}px`}}>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={img} width={img_width} alt="project-overview" />

                </div>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={memory} alt="project-overview" width={img_width}/>

                </div>
                
                <div className="projects-card">
                    
                    <img className="projects-img" src={memory} alt="project-overview" width={img_width} />

                </div>
            </div>
            <div className="arrow-container-right" onClick={toRight}>
                <img className="arrow-right" src={doubleRight} alt="next" />
            </div>

        </div>
    );
}
