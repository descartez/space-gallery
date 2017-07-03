import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Amanda Nelson Illustration',
      subtitle: 'Portraiture, Illustration, Design'
    };
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>

          // art textures
          <img id="spaceBunny1" src="https://ucarecdn.com/c6c09887-00a1-4d38-be37-ac1f71551f98/"/>
          <img id="spaceBunny2" src="https://ucarecdn.com/e09f73e5-5c60-4628-9272-2253c2af8637/"/>
          <img id="spaceCorgi" src="https://ucarecdn.com/b4409aeb-c472-414c-a901-bb5df19343ed/"/>
          <img id="elizabeth" src="https://ucarecdn.com/f12f3f80-014e-4483-ac4d-bfa9b0d1f812/"/>
          <img id="classyPheasant" src="https://ucarecdn.com/4743ae78-82f7-4122-8d1f-bb8113c9de2f/"/>
          <img id="dots" src="https://ucarecdn.com/a1895871-999e-41b5-889d-fa534c8aa343/"/>

        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="1" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity text={{value: this.state.title, align: 'left'}} position={{x: -0.5, y: 2, z: -1}}/>
        <Entity text={{value: this.state.subtitle, align: 'left'}} position={{x: -0.5, y: 1.9, z: -1}}/>

        <Entity geometry="primitive: plane" material="src: #spaceCorgi" position={{x: 0.5, y: 1.9, z: -1}} />


        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
