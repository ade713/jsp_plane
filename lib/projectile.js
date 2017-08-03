import Plane from './plane.js';

class Projectile {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = './assets/blue_shot.png';

    this.coords = {
      clipX: 0,
      clipY: 0,
      clipW: 150,
      clipH: 450,
      fieldX: 305,
      fieldY: 725,
      planeW: 10,
      planeH: 30
    };

    this.projectileImg();
  }

  projectileImg() {
    this.ctx.drawImage(
      this.img,
      this.coords.clipX,
      this.coords.clipY,
      this.coords.clipW,
      this.coords.clipH,
      this.coords.fieldX,
      this.coords.fieldY,
      this.coords.planeW,
      this.coords.planeH
    );
  }

  shoot(speed) {
    this.coords.fieldY += speed;
    console.log(this.coords.fieldY);
  }
}

export default Projectile;
