import React,{useState} from 'react';
import LoadScreen from '../loadScreen';
import './index.css';

export default function SubscribeForm(props) {

    const [flag, setFlag] = useState(null);

    function handlerSub(e){
        e.preventDefault();
        const email = e.target.elements[0].value; 

        setTimeout(() => {
            SubscribeRequest({email}, e.target.action)
        }, 2000);
        e.target.elements[0].value = "";
    }

    function SubscribeRequest(data, url){
        fetch(url, 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        ).then(res =>  {
            if(res.status === 200){
                setFlag(true);
            }
            setTimeout(() => { setFlag(false)}, 2000);
            return res.json();
        }).catch(err => {
            setFlag(false);
        });
    }

    return (
        <div className="subscribe-form">
            <h3>Receive new posts</h3>
            <form onSubmit={handlerSub} method="POST" action="http://127.0.0.1:3001/users/subscribe_email">
                <input className="subscribe-input" placeholder="Email address" name="email" type="email" id="email"></input>
                <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
        </div>
    )
}
