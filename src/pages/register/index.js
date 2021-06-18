import React, {useState} from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LoadScreen from '../../components/loadScreen';
import {useDispatch} from 'react-redux';
import {createUser, loginUser} from '../../actions/userActions';

export default function Signup(){

    const dispatch = useDispatch();
    const [msg, setMsg] = useState(null);
    const [flag, setFlag] = useState(false);

    function handlerSub(e){
        e.preventDefault();
        
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
                }else{
                    dispatch(createUser(data[0]));
                    dispatch(loginUser(data[0]));
                }
            }).catch(err => {
                setFlag(false);
                setMsg("Eror on servers! try again later!");
                setTimeout(() => { setMsg(null) }, 4000);
            });
    }



    return (
        <>
            <Header />
            <main className="section-container">
                <div className="info-container">
                    <h1 className="title-center">Create your account</h1>
                    <h3 className={msg?"notification-msg":"hidden"}>{msg}</h3>
                </div>
                <div className="signup-section">

                    <form method="POST" onSubmit={(e) => handlerSub(e)} action="https://fabiokleis-api.herokuapp.com/users" className="signup-form">
                        <label  className="signup-label">Username <span className="star">*</span></label>
                        <input required name="name" id="name" className="signup-input" type="text" ></input>
                        <label  className="signup-label">Email address <span className="star">*</span></label>
                        <input required name="email" id="email"className="signup-input" type="email" ></input>
                        <label className="signup-label">Password <span className="star">*</span></label>
                        <input required name="password" id="password" className="signup-input" type="password"></input>

                        <LoadScreen flag={flag} text={"Sign up"} />
                    </form>
                </div>
            </main>
            <Footer />
        
        </>
    );
}
