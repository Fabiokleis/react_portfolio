import React from 'react';
import './posts.css';

export default function Posts({post}){
    return(
        <div className="post-container"key={post.id}>
            <div className="post-header">
                <h1 className="post-title">
                    <span className="post-name">
                        {"@"+post.name} 
                    </span> - {post.title}
                </h1>
                <span className="post-date">
                    {new Date(post.updated_at)
                        .toLocaleDateString('en-US', { 
                            hour: 'numeric',
                            minute: 'numeric',
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                </span>
            </div>
            <p className="posts-description">
                {post.description}
            </p>
        </div>
    );
}