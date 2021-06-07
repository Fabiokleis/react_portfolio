import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainSection from './pages/main_section';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Signin from './pages/login';
import Signup from './pages/register';
import CardSection from './pages/card_section'

function App() {
  return (
    <Router>
        <div className="App">

            <Switch>
      
                <Route exact path="/">
                    <MainSection />
                </Route>
                <Route path="/cardsection/:id">
                    <CardSection />
                </Route>

                <Route path="/projects/:id">
                    <Projects />
                </Route>

                <Route exact path="/contact">
                    <Contact />
                </Route>

                <Route exact path="/signin">
                    <Signin />
                </Route>

                <Route exact path="/signup">
                    <Signup />
                </Route>

                <Route path="*">
                    <div>not found 404</div>
                </Route>

            </Switch>

        </div>

    </Router>
  );
}

export default App;
