import Plane from './plane';
import Obstacle from './obstacle';

class Field {
  constructor(ctx) {
    this.ctx = ctx;
    this.plane = new Plane(this.ctx);
  }
}

export default Field;
