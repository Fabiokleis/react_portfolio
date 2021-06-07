import React from 'react';
import './index.css';
import WelcomeSection from './welcome_section';
import PostsSection from './posts_section';
import ProjectsSection from './projects_section';
import Header from '../../components/header/';
import Footer from '../../components/footer';
import Boo from './fishingBoo_transperancy.png';

export default function MainSection(props){
    return (
        <>
        <Header show={true} />
        <div className="main-section">
            <div><h1>in the near future come again! application in development</h1></div>
            <div className="middle-section">
                <WelcomeSection />
                <img className="boo" src={Boo} alt="fishingBoo"/>
                <PostsSection />
            </div>
             <h1 className="projects-initializer">
                Projects
             </h1>
            <ProjectsSection />
            
        </div>
        <Footer />
        </>
    );
}
