class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = './assets/brick.jpg';
    this.blocks = [];

    this.coords = {
      clipX: 0,
      clipY: 0,
      clipW: 200,
      clipH: 50,
      cnvX: Math.floor(Math.random()*(550)),
      cnvY: -120,
      obstW: 150,
      obstH: 60
    };

    // this.small = this.small.bind(this);
    // this.small();
    this.drawBlock();
  }

  createBlocks() {
    for (let idx = 0; idx < 4; idx++) {
      this.blocks.push(this.coords);
    }
  }

  drawBlock() {
    // this.blocks.forEach((block, idx) => {
      this.ctx.drawImage(
        this.img,
        this.coords.clipX,
        this.coords.clipY,
        this.coords.clipW,
        this.coords.clipH,
        this.coords.cnvX,
        this.coords.cnvY,
        this.coords.obstW,
        this.coords.obstH
      );
      // console.log(block.cnvX);
      // this.fall();
    // });

    // block.clipX,
    // block.clipY,
    // block.clipW,
    // block.clipH,
    // block.cnvX,
    // block.cnvY,
    // block.obstW,
    // block.obstH

    // this.ctx.drawImage(
    //   this.img,
      // this.coords.clipX,
      // this.coords.clipY,
      // this.coords.clipW,
      // this.coords.clipH,
      // this.coords.cnvX,
      // this.coords.cnvY,
      // this.coords.obstW,
      // this.coords.obstH

    //   coords.clipX,
    //   coords.clipY,
    //   coords.clipW,
    //   coords.clipH,
    //   coords.cnvX,
    //   coords.cnvY,
    //   coords.obstW,
    //   coords.obstH
    // );
  }


  fall(dy = 1) {
    this.coords.cnvY += dy;
  }
}

export default Obstacle;
