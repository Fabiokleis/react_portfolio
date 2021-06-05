import React from 'react';
import './index.css';
import WelcomeSection from './welcome_section';
import PostsSection from './posts_section';
import ProjectsSection from './projects_section';

export default function MainSection(props){
    return (
        <div className="main-section">
            <WelcomeSection />
            <PostsSection />
            <ProjectsSection />
        </div>
    );
}
