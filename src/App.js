import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import Resume from './components/resume';
import LandingPage from './components/landingPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/resume' element={<Resume/>} />
      </Routes>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
