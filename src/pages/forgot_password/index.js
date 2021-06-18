import React,{useState, useEffect} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LoadScreen from '../../components/loadScreen';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import {saveUserForgotPassword} from '../../actions/userActions.js';
import querystring from 'querystring';
import './index.css';


export default function ForgotPassword(props){
    const dispatch = useDispatch();
    const userEmailAndToken = useSelector(state => state.register);
    const history = useHistory();
    const location = useLocation();
    const [msg, setMsg] = useState(null);
    const [flag, setFlag] = useState(false);
    const [match, setMatch] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let {from} = location.state || {from:{pathname: "/new_password"}};
        if(match){
            setLoading(true);
            setTimeout(() => {
                history.replace(from);

            }, 2000);
        }

    }, [match, history, location]);

    function handlerSub(e){
        e.preventDefault();
        if(!flag){
            const email = e.target.elements[0].value;
            setLoading(true);
            setTimeout(() => {
                forgotPasswordRequest({email}, e.target.action);
            }, 2000);

        }else{
            const reset_token = e.target.elements[0].value;
            const [data] = userEmailAndToken;
            if(reset_token === data.reset_token){
                setLoading(true);
                setTimeout(() => {
                    verifyUserToken(e.target.action+"?"+querystring.stringify(data));
                }, 2000);

            }else{
                setMsg("Token invalid!");
                setTimeout(() => {
                    setMsg(null);
                }, 3000)
            }
        }
        e.target.elements[0].value = "";
    }

    function forgotPasswordRequest(data, url){
        fetch(url, 
            {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(data)
            }).then((res) => {
                setLoading(false);
                if(res.status === 200){
                    setFlag(true);
                }
                return res.json();
            }).then(data => {
                if(data.message){
                    setMsg(data.message);
                    setTimeout(() => {setMsg(null);}, 5000);
                }
                dispatch(saveUserForgotPassword(data));
            }).catch(err => {
                setLoading(false);
                setMsg("Error on servers! try again later...");
                setTimeout(() => {setMsg(null);}, 4000);
            });

    }

    function verifyUserToken(url){
        fetch(url, {method: 'GET'})
            .then((res) => {
                setLoading(false);
                if(res.status === 200){
                    setMatch(true);
                }
                return res.json();
            }).then(data => {
                if(data.message){
                    setMsg(data.message);
                }
            }).catch(err => {
                setLoading(false);
                setMsg("Error on servers! try again later...");
                setTimeout(() => {setMsg(null)}, 4000);
            });
    }


    return (
        <>
            <Header />
            <main className="section-container">
                <div className="info-container">
                    <h1 className="title-center">Recover password</h1>
                    <h3 
                    className={msg?"notification-msg":"hidden"} >
                        {msg}
                    </h3>

                </div>
                <div className="forgot-section">
                    <form onSubmit={(e) => handlerSub(e)} method="GET" action={!flag?"https://fabiokleis-api.herokuapp.com/users/forgot_password":"https://fabiokleis-api.herokuapp.com/users/"} className="recover-form">
                        <label className="recover-label">{!flag?"Email address ":"Random Token "}<span className="star">*</span></label>
                        <input required placeholder={!flag?"":"TOKEN"} name={!flag?"email":"reset_token"} id={!flag?"email":"reset_token"} className={!flag?"recover-input":"token-input"} type={!flag?"email":"text"} ></input>
                        <LoadScreen flag={loading} match={match} text={!flag?"Send Email": "Verify Token"} />
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
