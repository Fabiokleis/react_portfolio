import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.css';
import Img from './o_pior.png';

export default function Projects(props){

    return (
        <>
            <Header />
            <main className="section-container">
                <h1 className="title-center">projects section</h1>    
                <div className="projects-section">
                                
                    <div className="project-container">
                        <h3 className="project-title">Project title</h3>
                        
                        <img className="project-view" alt="projectview" src={Img}></img>
                        <div className="description-container">
                            <p>Project description</p>
                            <p>loremProident ut occaecat ullamco irure occaecat irure ullamco duis sit minim.Incididunt proident pariatur veniam id quis eiusmod excepteur. Nulla magna in tempor dolor adipisicing. Mollit in mollit elit enim dolore exercitation labore irure aliqua fugiat Lorem. Et commodo laboris non labore ea ea incididunt duis duis in aute. Ullamco eu sunt ullamco cupidatat laborum deserunt Lorem amet aliqua tempor.

                            Sit commodo nisi in est nisi. Mollit irure id aliqua adipisicing et amet. In ex dolor sunt commodo mollit fugiat in duis ullamco et. Laborum qui duis fugiat consectetur ut proident non proident eu velit ad. Cillum duis reprehenderit aliqua consequat occaecat nulla nostrud. Do dolore nisi minim proident laboris aute veniam. Non in esse laborum commodo Lorem commodo velit eiusmod commodo nisi duis in dolor.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </>
    );
}
