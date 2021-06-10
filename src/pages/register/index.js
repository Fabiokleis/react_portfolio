import React, {useState} from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {useDispatch} from 'react-redux';
import {createUser} from '../../actions/userActions';



export default function Signup(){

    const dispatch = useDispatch();
    const [msg, setMsg] = useState();

    function handlerSub(e){
        e.preventDefault();
        
        const user = [];
        for(let i = 0; i < 3; i++){
            user.push(e.target.elements[i].value);
            console.log(user);
        }
        const [name, email, password] = user;


        dispatch(createUser({name, email, password}));
        createUserRequest({name, email, password}, e.target.action);

    }

    function createUserRequest(data,url){

        fetch(url, 
            {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(data)
            }).then((res) => {
                console.log(res);
                if(res.status === 201){

                }else if(res.status === 400){
                    return res.json();
                }
            }).then((data) => setMsg(data.message)).catch(err => err);
    }

    return (
        <>
            <Header signin={true} />
            <div className="info-container">
                <h1 className="title-center">Create your account</h1>
                <h3 className="notification-msg">{msg}</h3>
            </div>
            <div className="signup-section">

                <form method="POST" onSubmit={(e) => handlerSub(e)} action="http://127.0.0.1:3001/users" className="signup-form">
                    <label  className="signup-label">Username <span className="star">*</span></label>
                    <input required name="name" id="name" className="signup-input" type="text" ></input>
                    <label  className="signup-label">Email address <span className="star">*</span></label>
                    <input required name="email" id="email"className="signup-input" type="email" ></input>
                    <label className="signup-label">Password <span className="star">*</span></label>
                    <input required name="password" id="password" className="signup-input" type="password"></input>
                    <button  className="signup-btn" type="submit">Sign up</button>
                </form>

                
            </div>

            <Footer />
        </>
    );
}
