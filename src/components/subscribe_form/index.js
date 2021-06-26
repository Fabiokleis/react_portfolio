import React from 'react';
import './index.css';

export default function SubscribeForm(props) {

    function handlerSub(e){
        e.preventDefault();
        const email = e.target.elements[0].value; 

        SubscribeRequest({email}, e.target.action);
        e.target.elements[0].value = "";
    }

    function SubscribeRequest(data, url){
        fetch(url, 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        ).catch(err => alert("Error on servers! try again later..."));
    }

    return (
        <div className="subscribe-form">
            <h3>Receive new posts</h3>
            <form onSubmit={handlerSub} method="POST" action="https://fabiokleis-api.herokuapp.com/users/subscribe_email">
                <input className="subscribe-input" placeholder="Email address" name="email" type="email" id="email"></input>
                <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
        </div>
    )
}
