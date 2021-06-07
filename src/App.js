import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/';
import MainSection from './components/main_section';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
            <Header />


            <Route path="/projects">
                <div>Projects route</div>
            </Route>

            <Route path="/Contact">
                <div>Contact route</div>
            </Route>

            <Route path="/sigin">
                <div>Sigin route</div>
            </Route>

            <Route path="/sigup">
                <div>Siguproute</div>
            </Route>

            <Route path="/">
                <MainSection />
            </Route>
            <Footer />
        </div>
     </Switch>
    </Router>
  );
}

export default App;
