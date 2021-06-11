import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logOutUser} from '../../actions/userActions';


export default function HeaderLogin(){
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login);

    return (
            <div className={"header-login "}>
                <button onClick={() => dispatch(logOutUser())} className={loginState?"header-button button":"hidden"}>
                    <Link to="/signin" style={{textDecoration: 'none', color: 'white'}}>log out</Link>
                </button>
                <button className={!loginState?"header-button button":"hidden"}>
                    <Link to="/signin" style={{textDecoration: 'none', color: 'white'}}>Sign in</Link>
                </button>
                <button className={!loginState?"header-button button":"hidden"}>
                    <Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>Sign up</Link>
                </button>
            </div>
    );
}
