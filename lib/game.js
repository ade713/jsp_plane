// import Field from './field.js';
import Plane from './plane';
import Obstacle from './obstacle';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // this.field = new Field(this.ctx);
    this.plane = new Plane(this.ctx);
    this.plane.planeImg();
    this.obstacle = new Obstacle(this.ctx);
    this.timeStart = Date.now();
    this.score();
  }

  score() {
    let currentTime = Date.now();
    return 1 * Math.floor(((currentTime - this.timeStart) / 1000));
  }
}

export default Game;
