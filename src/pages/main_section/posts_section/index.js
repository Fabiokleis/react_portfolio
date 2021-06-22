import React from 'react';
import Cards from '../../../components/card';
import './index.css';

export default function PostsSection(props){

    return (
        <div className="cards-section">
            <Cards page={1} />
        </div>
   );
}
