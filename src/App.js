import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLink from './Components/ImageLink/ImageLink';
import Rank from './Components/Rank/Rank';
import './App.css';
import 'tachyons';


const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}

        />


        <Navigation />
        <Logo />
        <Rank />
        <ImageLink />

        {/*
      
      
        <ImageRecognition />
      */}


      </div>
    );
  }
}

export default App;
