import React,{useState, useEffect} from 'react';
import './index.css';

export default function Card(props){
    return (
        <div className="card-container">
            <div className="card-header">
                <h3 className="card-title">{props.post.title}</h3>
                <span className="card-date">
                    {new Date(props.post.updated_at).toLocaleDateString('en-US', {weekday: 'long', year:'numeric', month: 'long', day:'numeric'})}
                </span>
            </div>
            <p className="card-description">{props.post.description}</p>
       </div>            
    );
}
