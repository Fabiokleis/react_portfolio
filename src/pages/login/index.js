import React,{useState} from 'react';
import jwt from 'jwt-decode';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../actions/userActions';
import './index.css';


export default function Signin(props){
    const dispatch = useDispatch();
    const [msg, setMsg] = useState(null);

    function handlerSub(e){
        e.preventDefault();
        
        const user = [];
        for(let i = 0; i < 3; i++){
            user.push(e.target.elements[i].value);

        }
        const [email, password] = user;

        loginUserRequest({email, password}, e.target.action);
    }


    function loginUserRequest(data,url){

        fetch(url, 
            {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(data)
            }).then((res) => {
                if(res.status === 200){
                    const token = res.headers.get('Authorization');
                    return token;
                }else if(res.status === 400){
                    return res.json();
                }
            }).then((data) => {
                if(data.message){
                    setMsg(data.message);
                }else{
                    const user = jwt(data);
                    user.token = data;
                    dispatch(loginUser(user));
                }
            }).catch(err => err);
    }

    return (
        <>
            <Header />
            <main className="section-container">
                <div className="info-container">
                    <h1 className="title-center">Loggin your account</h1>
                    <h3 className={msg?"notification-msg":"hidden"}>{msg}</h3>
                </div>
                <div className="signin-section">
                
                    <form onSubmit={(e) => handlerSub(e)} method="POST" action="https://fabiokleis-api.herokuapp/users/login" className="signin-form">

                        <label className="signin-label">Email address <span className="star">*</span></label>
                        <input required name="email" id="email"className="signin-input" type="email"></input>
                        <label className="signin-label">Password <span className="star">*</span></label>
                        <input required name="password" id="password" className="signin-input" type="password"></input>
                        <button className="signin-btn" type="submit">Sign in</button>
                    </form>

                </div>
            </main>
            <Footer />
        </>
    );
}
