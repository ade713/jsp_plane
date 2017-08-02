
class Plane {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = './assets/planes.png';

    this.coords = {
      clipX: 140,
      clipY: 500,
      clipW: 100,
      clipH: 100,
      fieldX: 275,
      fieldY: 745,
      planeW: 50,
      planeH: 50
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
}

export default Plane;
