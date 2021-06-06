import React from 'react';
import './index.css';
import WelcomeSection from './welcome_section';
import PostsSection from './posts_section';
import ProjectsSection from './projects_section';

export default function MainSection(props){
    return (
        <div className="main-section">
            <div className="middle-section">
                <WelcomeSection />

                <PostsSection />
            </div>
             <h1 className="projects-initializer">
                Projects
             </h1>           
            <ProjectsSection />
            
        </div>
    );
}
