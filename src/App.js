import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import loginReducer from './reducers/loginReducer';
import createUser from './reducers/createUserReducer';
import postsReducer from './reducers/postsReducer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainSection from './pages/main_section';
import Projects from './pages/projects';
import Signin from './pages/login';
import Signup from './pages/register';
import NewPassword from './pages/new_password';
import CardSection from './pages/card_section';
import ForgotPassword from './pages/forgot_password';
import UnLoggedRoute from './components/unLoggedRoute';
import './App.css';

const combinedReducers = combineReducers(
    {
        register: createUser,
        login: loginReducer,
        posts: postsReducer

    }
)

function getLoginState(){
    const saved_state = JSON.parse(localStorage.getItem('user_state'));
    if(saved_state){
        return true;
    }else {
        return false;
    }
}

function setLoginState(user){
    localStorage.setItem('user_state', JSON.stringify(user));
}

const store = createStore(combinedReducers, {login: getLoginState()});

store.subscribe(() => {
    setLoginState(store.getState().login);
})


function App() {
  return (
    <Provider store={store}>
    <Router>
        <div className="App">

            <Switch>
               
                <Route exact path="/">
                    <MainSection />
                </Route>
                
                <Route path="/posts">
                    <CardSection />
                </Route>

                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route path="/projects/:id">
                    <Projects />
                </Route>

                <UnLoggedRoute exact path="/signin">
                    <Signin />
                </UnLoggedRoute>

                <UnLoggedRoute exact path="/signup">
                    <Signup />
                </UnLoggedRoute>

                <UnLoggedRoute exact path="/forgot_password">
                    <ForgotPassword />
                </UnLoggedRoute>

                <UnLoggedRoute exact path="/new_password">
                    <NewPassword></NewPassword>
                </UnLoggedRoute>
                
                <Route path="*">
                    <div>not found 404</div>
                </Route>

            </Switch>

        </div>

    </Router>
    </Provider>
  );
}

export default App;
