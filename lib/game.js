import Field from './field.js';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.field = new Field(this.ctx);
    this.timeStart = Date.now();
    this.score = 0;

  }

  score() {
    let currentTime = Date.now();
    return 2 * ((currentTime - this.timeStart) / 1000);
  }
}

export default Game;
