import * as THREE from 'three';
import Scene from './resources/scene';
import Client from './resources/client';

// import { Scene } from '../src/resources/scene'

export class App {

  public message;
  public submessage;
  constructor() {
    this.message = 'Hello Aurelia and Three.js!';
    this.submessage = "Tests";
  }

  myScene = new Scene();

  newClient = new Client();

  createshape() {
    // this.myScene.initialization();
  }

  create_cube() {
    this.newClient.createscene();
  }
  move_cube() {
    // this.myScene.move();
  }
}

