import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';


export default function UnLoggedRoute({children, ...rest}){

    const loginState = useSelector(state => state.login);

    return <Route {...rest} 
        render={({location}) => 
            !loginState?(children):
            (<Redirect to={{
                pathname:"/",
                state: {from: location}
            }}></Redirect>)
        }>
    </Route>
}