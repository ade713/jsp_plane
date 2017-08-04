
class Plane {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = './assets/planes.png';

    this.coords = {
      clipX: 140,
      clipY: 500,
      clipW: 80,
      clipH: 100,
      cnvX: 275,
      cnvY: 740,
      planeW: 48,
      planeH: 60
    };

    this.planeImg();
  }

  planeImg() {
    this.ctx.drawImage(
      this.img,
      this.coords.clipX,
      this.coords.clipY,
      this.coords.clipW,
      this.coords.clipH,
      this.coords.cnvX,
      this.coords.cnvY,
      this.coords.planeW,
      this.coords.planeH
    );
  }

  move(dx) {
    if (this.coords.cnvX > 0 &&
        dx < 0 ) {
      this.coords.cnvX += dx;
    } else if (this.coords.cnvX < (this.ctx.canvas.width - this.coords.planeW) &&
               dx > 0) {
      this.coords.cnvX += dx;
    }
  }
}

export default Plane;
