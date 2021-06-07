import React from 'react'
import './index.css';

export default function SubscribeForm(props) {
    return (
        <div className="subscribe-form">
            <h3>Receive new posts</h3>
            <form>
                
                <input className="subscribe-input" placeholder="Email address" name="email" type="email" id="email"></input>
                <button className="subscribe-btn">Submit</button>
            </form>
        </div>
    )
}
