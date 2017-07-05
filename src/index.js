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
      title: 'Animals in Space',
      subtitle: 'by Amanda Nelson',
      aboutMe: "Amanda Nelson is an artist and illustrator, based in Southern California. When she's not making art she can be found attending Corgi Beach Days and petting other peoples' dogs. \n\n She is available for illustration, portraiture, and design work.",
      xTileSize: 0.3,
      yTileSize: 0.25,
      trayHeight: 1.2,
      selectedImage: "#spaceCorgi",
      images: [
        {
          id:"spaceBunny1",
          url: "https://ucarecdn.com/c6c09887-00a1-4d38-be37-ac1f71551f98/"
        },
        {
          id:"spaceBunny2",
          url: "https://ucarecdn.com/e09f73e5-5c60-4628-9272-2253c2af8637/"
        },
        {
          id:"spaceCorgi",
          url: "https://ucarecdn.com/b4409aeb-c472-414c-a901-bb5df19343ed/"
        }
      ]
    };
  }

  changeImage = (image) => {
    console.log(image);
    this.setState({selectedImage: `#${image}`})
  }

  render () {
    return (
      <Scene>
      <a-assets>
        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
        <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>

          // art textures
          {this.state.images.map((image) => {
              return <img id={image.id} src={image.url}/>
            })
          }

      </a-assets>

          <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
          <Entity primitive="a-light" type="ambient" color="#445451"/>
          <Entity primitive="a-light" type="point" intensity=".7" position="2 4 5"/>
          <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>

          <Entity text={{value: this.state.title, align: 'left'}} position={{x: -0.5, y: 2, z: -1}} />
          <Entity text={{value: this.state.subtitle, align: 'left'}} position={{x: -0.5, y: 1.9, z: -1.5}} />

          <Entity text={{value: this.state.aboutMe}}
            position={{x: 1.4, y: 1.5, z: -1}}
            rotation={{x: 0, y: -40, z: 0}}/>



          <Entity
            geometry={{primitive: "plane"}}
            scale={{x: 3, y: 2}}
            material={{src: this.state.selectedImage}}
            position={{x: 0.5, y: 2, z: -3}} />


          <Entity
            events={{mouseenter: () => {
              this.changeImage("spaceBunny1")
            }}}
            geometry={{primitive: "plane"}}
            scale={{x: this.state.xTileSize, y: this.state.yTileSize}}
            material={{src: "#spaceBunny1"}}
            position={{x: -0.5, y: this.state.trayHeight, z: -1}} />

          <Entity
            events={{mouseenter: () => {
              this.changeImage("spaceBunny2")
            }}}
            geometry={{primitive: "plane"}}
            material={{src: "#spaceBunny2"}}
            scale={{x: this.state.xTileSize, y: this.state.yTileSize}}
            position={{x: 0, y: this.state.trayHeight, z: -1}} />

          <Entity
            events={{mouseenter: () => {
              this.changeImage("spaceCorgi")
            }}}
            geometry={{primitive: "plane"}}
            scale={{x: this.state.xTileSize, y: this.state.yTileSize}}
            material={{src: "#spaceCorgi"}}
            position={{x: 0.5, y: this.state.trayHeight, z: -1}} />


          <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
          </Entity>
          </Scene>
          );
}
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
