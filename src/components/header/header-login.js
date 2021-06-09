import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderLogin(props){

    return (
            <div className={props.show?"header-login ":"hidden"}>
                <button className="header-button button">
                    <Link to="/signin" style={{textDecoration: 'none', color: 'white'}}>Sign in</Link>
                </button>
                <button className="header-button button">
                    <Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>Sign up</Link>
                </button>
            </div>
    );
}
