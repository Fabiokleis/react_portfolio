import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/';
import MainSection from './components/main_section';
import Footer from './components/footer';


function App() {
  return (
    <Router>
        <div className="App">
            <Header />

            <Switch>
      
                <Route component={MainSection} exact path="/" />

                <Route path="/projects">
                    <div>Projects route</div>
                </Route>

                <Route path="/contact">
                    <div>Contact route</div>
                </Route>

                <Route path="/signin">
                    <div>Signin route</div>
                </Route>

                <Route path="/signup">
                    <div>Sign uproute</div>
                </Route>

                <Route path="*">
                    <div>not found 404</div>
                </Route>

            </Switch>

            <Footer />
        </div>

    </Router>
  );
}

export default App;
