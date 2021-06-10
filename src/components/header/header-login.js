import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderLogin(props){

    return (
            <div className={"header-login "}>
                <button className={props.signin?"header-button button":"hidden"}>
                    <Link to="/signin" style={{textDecoration: 'none', color: 'white'}}>Sign in</Link>
                </button>
                <button className={props.signup?"header-button button":"hidden"}>
                    <Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>Sign up</Link>
                </button>
            </div>
    );
}
