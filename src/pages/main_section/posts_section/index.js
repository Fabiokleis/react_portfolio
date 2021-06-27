import React from 'react';
import Card from '../../../components/card/card';
import Cards from '../../../components/card';
import './index.css';

export default function PostsSection(props){
    
    return (
        <div className="posts-container">
            <div className="cards-section">

                <Cards page={1} Component={Card} />
            </div>
        </div>
   );
}
