import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.css';


export default function CardSection(props){
    
    return (
        <>
            <Header signin={true} signup={true} />
            <main className="section-container">
                <h1>Posts</h1>
                <div className="card-section">
                    <div className="card-container">
                        <h3 className="card-title">Card title</h3>
                        <p>Nostrud ea enim proident ullamco amet ea sit eiusmod laboris deserunt minim non. Enim cillum do incididunt non consectetur. Sit non consequat laboris voluptate reprehenderit. Magna est nulla aliqua veniam. Mollit eiusmod elit nulla minim.

                        Amet id consequat et quis fugiat. Veniam eiusmod sunt amet aute esse minim in eiusmod cupidatat exercitation labore. Laboris deserunt sint deserunt occaecat deserunt cupidatat pariatur deserunt culpa. Aute ex nisi enim officia.
                        </p>
                    </div>
                    <div className="card-container">
                        <h3 className="card-title">Card title</h3>
                        <p>Nostrud ea enim proident ullamco amet ea sit eiusmod laboris deserunt minim non. Enim cillum do incididunt non consectetur. Sit non consequat laboris voluptate reprehenderit. Magna est nulla aliqua veniam. Mollit eiusmod elit nulla minim.

                        Amet id consequat et quis fugiat. Veniam eiusmod sunt amet aute esse minim in eiusmod cupidatat exercitation labore. Laboris deserunt sint deserunt occaecat deserunt cupidatat pariatur deserunt culpa. Aute ex nisi enim officia.
                        </p>
                    </div>
                                    <div className="card-container">
                        <h3 className="card-title">Card title</h3>
                        <p>Nostrud ea enim proident ullamco amet ea sit eiusmod laboris deserunt minim non. Enim cillum do incididunt non consectetur. Sit non consequat laboris voluptate reprehenderit. Magna est nulla aliqua veniam. Mollit eiusmod elit nulla minim.

                        Amet id consequat et quis fugiat. Veniam eiusmod sunt amet aute esse minim in eiusmod cupidatat exercitation labore. Laboris deserunt sint deserunt occaecat deserunt cupidatat pariatur deserunt culpa. Aute ex nisi enim officia.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

