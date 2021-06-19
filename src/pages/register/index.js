import React, {useState, useEffect} from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PasswordInput from '../../components/passwordInput';
import LoadScreen from '../../components/loadScreen';
import {useDispatch} from 'react-redux';
import {createUser, loginUser} from '../../actions/userActions';

export default function Signup(){

    const dispatch = useDispatch();
    const [msg, setMsg] = useState(null);
    const [flag, setFlag] = useState(false);
    const [checked, setChecked] = useState(false);

    function handlerSub(e){
        e.preventDefault();
        
        setChecked(e.target.elements[3].checked);
        
        const user = [];
        for(let i = 0; i < 3; i++){
            user.push(e.target.elements[i].value);
        }
        const [name, email, password] = user;
        setFlag(true);
        setTimeout(() => {
            createUserRequest({name, email, password}, e.target.action);

        }, 2000);
        
    }

    function createUserRequest(data,url){

        fetch(url, 
            {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(data)
            }).then((res) => res.json()).then((data) => {
                setFlag(false);
                if(data.message){
                    setMsg(data.message);
                    setTimeout(() => {setMsg(null)}, 4000);
                }else{
                    const {email} = data[0];
                    dispatch(createUser(data[0]));
                    if(checked){
                        SubscribeRequest({email}, 'https://fabiokleis-api.herokuapp.com/users/subscribe_email');
                        setTimeout(() => {
                            dispatch(loginUser(data[0]));
                        }, 2000);
                    }
                }
            }).catch(err => {
                setFlag(false);
                setMsg("Error on servers! try again later!");
                setTimeout(() => { setMsg(null) }, 4000);
            });
    }

    function SubscribeRequest(data, url){
        fetch(url, 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        );
    }

    return (
        <>
            <Header />
            <main className="section-container">
                <h1 className="title-center">Create your account</h1>

                <div className="info-container">
                    <h3 className={msg?"notification-msg":"hidden"}>{msg}</h3>
                </div>
                <div className="signup-section">

                    <form method="POST" onSubmit={(e) => handlerSub(e)} action="https://fabiokleis-api.herokuapp.com/users" className="signup-form">
                        <label  className="signup-label">Username <span className="star">*</span></label>
                        <input required name="name" id="name" className="signup-input" type="text" ></input>
                        <label  className="signup-label">Email address <span className="star">*</span></label>
                        <input required name="email" id="email" className="signup-input" type="email" ></input>
                        <PasswordInput />
                        <div className="checkbox-container">
                            <input type="checkbox" />
                            <label className="checkbox-label">receive new posts?</label>
                        </div>
                        <LoadScreen flag={flag} text={"Sign up"} />
                    </form>
                </div>
            </main>
            <Footer />
        
        </>
    );
}
