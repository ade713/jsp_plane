
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
      fieldX: 275,
      fieldY: 725,
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
      this.coords.fieldX,
      this.coords.fieldY,
      this.coords.planeW,
      this.coords.planeH
    );
  }

  move(dx) {
    console.log(this.coords.fieldX);
    if (this.coords.fieldX > 0 &&
        dx < 0 ) {
      this.coords.fieldX += dx;
    } else if (this.coords.fieldX < (this.ctx.canvas.width - this.coords.planeW) &&
               dx > 0) {
      this.coords.fieldX += dx;
    }
  }
}

export default Plane;
