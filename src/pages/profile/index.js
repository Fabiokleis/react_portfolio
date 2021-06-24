import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cards from '../../components/card';
import './index.css';

export default function Profile(props){

    return (
        <>
        <Header />
        <main className="section-container">
            <div className="user-profile" >
                <div className="user-container">
                    <div className="img-container">
                        <img className="user-img" src="" alt="profile picture" />
                    </div>
                    <div className="user-credentials">
                        <h3 className="user-name">User name</h3>
                        <h4 className="user-email">User email</h4>
                        <div className="user-bio">
                            user bio...
                        </div> 
                    </div>
               </div>
                <div className="user-posts">
                    <form method="POST" action="http://127.0.0.1:3001/posts"> 
                       <div className="newpost-container">
                           <input placeholder="title" required name="title" id="title" type="text" />
                           <input placeholder="description" required name="description" id="description" type="text" />
                           <button className="post-btn" type="submit">Post</button>
    
                       </div>
                    </form>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}
