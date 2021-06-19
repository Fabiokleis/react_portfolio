import React from 'react';
import show from './eye.svg';
import hide from './eye-off.svg';

export default function PasswordInput(){

    function swapImg(element){
        if(element.target.src.includes(hide)){
            document.getElementById("password").type = "text";
            element.target.src = show;

        }else{
            element.target.src = hide;
            document.getElementById("password").type = "password";
        }
    }


    return (
            <div className="password-section">
               <label className="signin-label">Password <span className="star">*</span></label>
               <img src={hide} onClick={swapImg} alt="show password" className="eyes" />
                <input required name="password" id="password" className="signin-input" type="password"></input>
            </div>
    );
}

