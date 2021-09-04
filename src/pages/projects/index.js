import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.css';
import Img from './o_pior.png';
import gof from './gof.png';
import gm from './gameOver.png';

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
                            <p>O pior da história!</p>
                            <p>O podcast o pior da história é um podcast que está em todas as redes
                            e agora na sua própria plataforma <a target="_blank" href="https://o-pior-da-historia.web.app/">o-pior-da-historia</a>.
                            É um projeto simples feito em html/css e Javascript, utilizando Firebase como storage de audio etc.
                            Repositório no <a target="_blank" href="https://github.com/Fabiokleis/o-pior-da-historia">Github</a>
                            </p>
                        </div>
                    </div>

                     <div className="project-container">
                        <h3 className="project-title">O jogo da vida</h3>
                        
                        <img className="project-view" alt="projectview" src={gof}></img>
                        <div className="description-container">
                            <p>Game of life!</p>
                            <p>
                                Uma implementação em Javascript e em linguagem C do jogo da vida de John Conway
                                <p>Visite os repositórios no github:</p>
                                <p>gof - <a target="_blank" href="https://github.com/Fabiokleis/gof_js">versão javascript</a></p>
                                <p>gof - <a target="_blank" href="https://github.com/Fabiokleis/gof">versão em C</a></p>
                            </p>
                        </div>
                    </div>
                      <div className="project-container">
                        <h3 className="project-title">Jogo da memória</h3>
                        
                        <img className="project-view" alt="projectview" src={gof}></img>
                        <div className="description-container">
                            <p>Memory game!</p>
                            <p>
                                Jogo da memória feito em react, apenas um projeto iniciante.
                                veja o repositório no github <a target="_blank" href="https://github.com/Fabiokleis/react_memory_game">react_memory_game</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </>
    );
}
