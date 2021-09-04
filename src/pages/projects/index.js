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
                        <h3 className="project-title">O pior da história</h3>
                        
                        <img className="project-view" alt="projectview" src={Img}></img>
                        <div className="description-container">
                            <p>Project description</p>
                            <p>O podcast o pior da história é um podcast que está em todas as redes
                            e agora na sua própria plataforma <a href="https://o-pior-da-historia.web.app/">o-pior-da-historia</a>.
                            É um projeto simples feito em html/css e Javascript, utilizando Firebase como storage de audio etc.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </>
    );
}
