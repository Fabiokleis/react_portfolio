import React from 'react';
import './index.css';

export default function Summary({updatePageNumber, pages_array, decrement, increment}){

   return (
        <div className="summary-container">
            <div className="left-arrow-page" onClick={decrement}>{"<"}</div>
            {pages_array.map((p, index) => (
                <div onClick={() => updatePageNumber(p)} className="page-number" key={index}>
                    {p}
                </div>
             ))}
             <div className="right-arrow-page" onClick={increment} >{">"}</div>
       </div> 
    );
}
