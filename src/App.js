import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Clarifai  from 'clarifai';
import Rank from './Components/Rank/Rank';
import ImageLink from './Components/ImageLink/ImageLink';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: '81c45269c345456588c57e777fcd2d11'
 });

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
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:'',
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}

        />


        <Navigation />
        <Logo />
        <Rank />
        <ImageLink
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit} />     
        <FaceRecognition  imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
