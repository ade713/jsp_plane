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
      cnvX: 292,
      cnvY: 710,
      projW: 12,
      projH: 36
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
      this.coords.cnvX,
      this.coords.cnvY,
      this.coords.projW,
      this.coords.projH
    );
  }

  shoot(speed, planeX) {
    this.coords.cnvX = planeX + 17;
    this.coords.cnvY += speed;
  }
}

export default Projectile;
