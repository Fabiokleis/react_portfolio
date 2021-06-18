import React,{useState, useEffect} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LoadScreen from '../../components/loadScreen';
import {useHistory, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function NewPassword() {
    const userForgotPasswordData = useSelector(state => state.register);
    const history = useHistory();
    const location = useLocation();
    const [flag, setFlag] = useState(false);
    const [msg, setMsg] = useState(null);
    const [pwd, setPwd] = useState();
    const [cpwd, setCpwd] = useState();
    const [match, setMatch] = useState(false);

    useEffect(() => {
        let {from} = location.state || {from:{pathname: "/signin"}};
        if(!Object.values(userForgotPasswordData).length){
            history.replace(from);
        }
        if(match){
            setFlag(true);
            setMsg("Loggin your account now!");
            setTimeout(() => {
                history.replace(from);
            }, 2000);
        }
    }, [match, history, location, userForgotPasswordData]);

    function handlerSub(e){
        e.preventDefault();
        if(pwd !== cpwd) {
            setMsg("Password are different!");
            setTimeout(() => {
                setMsg(null);
            }, 4000);
        }else{
            const url = e.target.action;
            const {id, email, reset_token, token_date} = userForgotPasswordData['0'];
            const password = pwd;
            setFlag(true);
            setTimeout(() => {
                UpdatePasswordRequest({
                    id, email, password, reset_token, token_date
                },url);
                setFlag(false);
            }, 2000);
        }
    }

    function handlerPasswd(e){
        setPwd(e.target.value);
    }

    function handlerConfirmPasswd(e){
        setCpwd(e.target.value);
    }

    function UpdatePasswordRequest(data, url){
        fetch(url, 
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        ).then(res => {
            setFlag(false);
            if(res.status === 200){
                setMatch(true);
            }
            return res.json();
        }).then(data => {
            if(data.message) setMsg(data.message);
        }).catch(err => {
            setMsg("Error on servers! try again later...");
            setTimeout(() => {
                setMsg(null);
            }, 4000)
        });
    }

    return (
        <>
        <Header />
        <main className="section-container">
            <h1 className="title-center">New account password</h1>

            <div className="info-container">
               <h3 className={msg?"notification-msg":"hidden"}>{msg}</h3>
            </div>
            <div className="signin-section">
            
                <form onSubmit={(e) => handlerSub(e)} method="POST" action="http://127.0.0.1:3001/users/new_password" className="signin-form">
                    <label className="signin-label">New Password <span className="star">*</span></label>
                    <input onChange={handlerPasswd} required name="password" id="password" className="signin-input" type="password"></input>
                    <label className="signin-label">Confirm Password <span className="star">*</span></label>
                    <input onChange={handlerConfirmPasswd} required name="confirm-password" id="confirm-password" className="signin-input" type="password"></input>
                    <LoadScreen flag={flag} text={'Recreate'} />
                </form>
            </div>
        </main>
        <Footer />
    </>
    )
}
