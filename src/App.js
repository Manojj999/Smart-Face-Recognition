import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLink from './Components/ImageLink/ImageLink';
import './App.css';
import 'tachyons';


function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Logo />
      <ImageLink />
      {/*
      <Count / >
      
        <ImageRecognition />
      */}


    </div>
  );
}

export default App;
