import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cards from '../../components/card/';
import {useSelector} from 'react-redux';
import './index.css';

export default function CardSection(props){
    const posts = useSelector(state => state.posts);
    
    return (
        <>
            <Header />
            <main className="section-container">
                <h1 className="title-center">Posts</h1>
                <div className="posts-section">
                    {posts.map(post => (
                        <div className="post-container">
                            <div className="post-header" key={post.id}>
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
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

