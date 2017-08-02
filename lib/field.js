import Plane from './plane';
import Obstacle from './obstacle';

class Field {
  constructor(ctx) {
    this.ctx = ctx;
    this.plane = new Plane(this.ctx);
    this.plane.planeImg();
  }
}

export default Field;
