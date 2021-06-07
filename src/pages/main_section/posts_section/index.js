import React from 'react';
import './index.css';

export default function PostsSection(props){

    return (
        <div className="posts-section">
            <div className="posts-card">
                <h1 className="posts-card-title">card title</h1>
                <p className="posts-card-description">card description...</p>
            </div>
            <div className="posts-card">
                <h1 className="posts-card-title">card title</h1>
                <p className="posts-card-description">card description...</p>
            </div>
            <div className="posts-card">
                <h1 className="posts-card-title">card title</h1>
                <p className="posts-card-description">card description...</p>
            </div>
        </div>
    );
}
