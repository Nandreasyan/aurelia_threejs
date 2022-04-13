import * as THREE from 'three';
import Scene from './resources/scene';

// import { Scene } from '../src/resources/scene'

export class App {

  public message;
  public submessage;
  constructor() {
    this.message = 'Hello World!';
    this.submessage = "Aurelia tests";
  }



  myScene = new Scene();

  // public create_shape(): void {

  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);

  //   const geometry = new THREE.BoxGeometry(1, 1, 1);
  //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);

  //   camera.position.z = 5;

  //   function animate() {
  //     requestAnimationFrame(animate);
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;

  //     renderer.render(scene, camera);
  //   }
  //   animate()
  // }

  createshape() {
    this.myScene.initialization();
  }

  create_cube() {
    this.myScene.create_shape();
  }
  move_cube() {
    // this.myScene.move();
  }
}

