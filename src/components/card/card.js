import React from 'react';
import './index.css';

export default function Card(props){
    return (
        <div className="card-container">
            <div className="card-header">
                <h3 className="card-title"><span className="card-name">{"@"+props.post.name}</span> - {props.post.title}</h3>
                <span className="card-date">
                    {new Date(props.post.updated_at).toLocaleDateString('en-US',
                        {weekday: 'long',month: 'long',day:'numeric', hour: 'numeric', minute: 'numeric'})}
                </span>
            </div>
            <p className="card-description">{props.post.description}</p>
       </div>            
    );
}
