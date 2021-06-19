import React,{useState} from 'react';
import jwt from 'jwt-decode';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LoadScreen from '../../components/loadScreen';
import PasswordInput from '../../components/passwordInput';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../actions/userActions';
import {Link} from 'react-router-dom';
import './index.css';

export default function Signin(props){
    const dispatch = useDispatch();
    const [msg, setMsg] = useState(null);
    const [flag, setFlag] = useState(false);

    function handlerSub(e){
        e.preventDefault();
        
        const user = [];
        for(let i = 0; i < 3; i++){
            user.push(e.target.elements[i].value);

        }
        const [email, password] = user;
        setFlag(true);
        setTimeout(() => {
            loginUserRequest({email, password}, e.target.action);

        }, 2000);
    }


    function loginUserRequest(data,url){

        fetch(url, 
            {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(data)
            }).then((res) => {
                setFlag(false);
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
            }).catch(err => {
                setFlag(false);
                setMsg("Error on servers! try again later!");
                setTimeout(() => { setMsg(null) }, 4000)
            });
    }

   
    return (
        <>
            <Header />
            <main className="section-container">
                <h1 className="title-center">Loggin your account</h1>

                <div className="info-container">
                    <h3 className={msg?"notification-msg":"hidden"}>{msg}</h3>
                </div>
                <div className="signin-section">
                
                    <form onSubmit={(e) => handlerSub(e)} method="POST" action="https://fabiokleis-api.herokuapp.com/users/login" className="signin-form">

                        <label className="signin-label">Email address <span className="star">*</span></label>
                        <input required name="email" id="email"className="signin-input" type="email"></input>
                        <PasswordInput />
                        <LoadScreen flag={flag} text={'Sign in'} />
                    </form>
                </div>
                <div className="forgot_password-section">
                    <Link className="forgot-text" to="/forgot_password">forgot password?</Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
