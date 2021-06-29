import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logOutUser} from '../../actions/userActions';
import pic from './user.svg';

export default function HeaderLogin(){
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login);
    
    return (
            <div className="header-login">
                <div className={loginState?"menu-wrapper":"hidden"}>
                        <img className={loginState?"profile-pic":"hidden"} width="24px" height="24px" src={!loginState.img?pic:loginState.img} alt="user" />
                    <img className="arrow" alt="arrow-down" />
                    <ul className="menu-nav-login">
                        <Link to="/profile" style={{ textDecoration: 'none', color: 'white'}}>
                            <li className="nav-li">Profile</li>
                        </Link>

                        <li onClick={() => dispatch(logOutUser())}className="nav-li">logout</li>
                    </ul>
                </div>
                <button className={!loginState?"header-button button":"hidden"}>
                    <Link to="/signin" style={{textDecoration: 'none', color: 'white'}}>Sign in</Link>
                </button>
                <button className={!loginState?"header-button button":"hidden"}>
                    <Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>Sign up</Link>
                </button>

            </div>
    );
}
