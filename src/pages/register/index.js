import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {useDispatch} from 'react-redux';
import {createUser} from '../../actions/userActions';

export default function Signup(){
    // const payload = useSelector((state) => state.register);
    const dispatch = useDispatch();


    function handlerSub(e){
        e.preventDefault();
        const user = [];
        for(let i = 0; i < 3; i++){
            user.push(e.target.elements[i].value);
            console.log(user);
        }
        const [name, email, password] = user;
        dispatch(createUser({name, email, password}));
        // createUserRequest(payload, e.target.action);
    }

    // function createUserRequest(data,url){
    //     // todo 
    //     // implement fetch request to register user
    // }

    return (
        <>
            <Header show={false} />
            <h1 className="title-center">Create your account</h1>
            <h3>implement messages to alert the user</h3>
            <div className="signup-section">
            
                <form method="POST" onSubmit={handlerSub} action="http://127.0.0.1:3001/users" className="signup-form">
                    <label  className="signup-label">Username</label>
                    <input required name="name" id="name" className="signup-input" type="text" ></input>
                    <label  className="signup-label">Email address</label>
                    <input required name="email" id="email"className="signup-input" type="email" ></input>
                    <label className="signup-label">Password</label>
                    <input required name="password" id="password" className="signup-input" type="password"></input>
                    <button  className="signup-btn" type="submit">Sign up</button>
                </form>
            </div>
            <Footer />
        </>
    );
}
