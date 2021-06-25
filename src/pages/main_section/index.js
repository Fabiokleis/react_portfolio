import React from 'react';
import './index.css';
import WelcomeSection from './welcome_section';
import PostsSection from './posts_section';
import ProjectsSection from './projects_section';
import Header from '../../components/header/';
import Footer from '../../components/footer';

export default function MainSection(props){
    return (
        <>
        <Header />
        <main className="section-container">
            <div className="main-section">
                <h1 className="future">in the near future come again! application in development</h1>

                <div className="middle-section">
                    <WelcomeSection />

                    <PostsSection />
                </div>
                <div>
                    <h1 className="projects-initializer">
                        Projects
                    </h1>
                <ProjectsSection />
                </div>            
            </div>
        </main>
        <Footer />
        </>
    );
}
