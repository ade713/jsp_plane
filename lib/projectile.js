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
      fieldX: 292,
      fieldY: 710,
      planeW: 12,
      planeH: 36
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

  shoot(speed, planeX) {
    this.coords.fieldX = planeX + 17;
    this.coords.fieldY += speed;
  }
}

export default Projectile;
