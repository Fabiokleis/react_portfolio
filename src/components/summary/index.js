import React from 'react';
import './index.css';

export default function Summary({updatePageNumber, pages_array, decrement, increment}){

   return (
        <div className="summary-container">
            <img className="left-arrow-page" onClick={decrement} src="" alt="<" />
            {pages_array.map((p, index) => (
                <div onClick={() => updatePageNumber(p)} className="page-number" key={index}>
                    {p}
                </div>
             ))}
             <img className="right-arrow-page" onClick={increment} src="" alt=">" />
       </div> 
    );
}
