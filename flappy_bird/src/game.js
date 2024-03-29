import Level from './level.js';
import Bird from './bird.js';

const level = require('./level.js')

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    canvas.addEventListener("mousedown", this.click.bind(this));
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate() {
    // debugger
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    if (this.running) {
      window.requestAnimationFrame(this.animate.bind(this));
    } 
  }

  restart() {
    // debugger
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    // debugger
    this.animate();
  }

  play() {
    this.running = true;
    this.animate();
  }

  click(e) {
    if(!this.running) {
      this.play();
    }
    this.bird.flap();
  }
}