import React from 'react';
import svgicon from './refresh-cw.svg';
import './index.css';

export default function LoadScreen(props){
    
    return (
        <>
        <div className={props.flag?"loadscreen-container":"hidden"}>
            <img src={svgicon} alt="loading svg" className="loadscreen-icon"/>
       </div>
       <button className={!props.flag?"signin-btn":"hidden"} type="submit">Sign in</button>
        </>
    );
}
