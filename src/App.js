import React from 'react';
import './App.css';
import Header from './components/header/';
import MainSection from './components/main_section';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
   </div>
  );
}

export default App;
