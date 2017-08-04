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
      cnvX: 0,
      // cnvX: Math.floor(450*Math.random()),
      cnvY: -120,
      obstW: 150,
      obstH: 60,
      falling: false
    };

    // this.drawBlock();
  }

  createBlocks() {
    for (let idx = 0; idx < 4; idx++) {
      this.coords.cnvX = idx * 150;
      console.log('CNVX', this.coords.cnvX);
      console.log('coords', this.coords);
      this.blocks[idx] = (this.coords);
      // this.blocks[idx].cnvX = 150;
      // console.log(this.blocks);
      console.log(this.blocks[idx].cnvX);
    }
    // this.blocks = [
    //   {
    //     clipX: 0,
    //     clipY: 0,
    //     clipW: 200,
    //     clipH: 50,
    //     cnvX: 0,
    //     cnvY: -120,
    //     obstW: 150,
    //     obstH: 60,
    //     falling: false
    //   },
    //
    //   {
    //     clipX: 0,
    //     clipY: 0,
    //     clipW: 200,
    //     clipH: 50,
    //     cnvX: 150,
    //     cnvY: -120,
    //     obstW: 150,
    //     obstH: 60,
    //     falling: false
    //   },
    //
    //   {
    //     clipX: 0,
    //     clipY: 0,
    //     clipW: 200,
    //     clipH: 50,
    //     cnvX: 300,
    //     cnvY: -120,
    //     obstW: 150,
    //     obstH: 60,
    //     falling: false
    //   },
    //
    //   {
    //     clipX: 0,
    //     clipY: 0,
    //     clipW: 200,
    //     clipH: 50,
    //     cnvX: 450,
    //     cnvY: -120,
    //     obstW: 150,
    //     obstH: 60,
    //     falling: false
    //   }
    // ];
  }

  drawBlock() {
    this.blocks.forEach((block, idx) => {
      console.log('DRAWBLK', this.coords.cnvX);
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
    });

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

  handleFall() {
    //choose a random brick
    let brickIndex = Math.floor(4*Math.random());
    //set chosen brick falling key to true
    console.log(brickIndex);
    // this.blocks[brickIndex].cnvX = brickIndex * 150;
    // console.log(this.blocks);
    this.blocks[brickIndex].falling = true;
  }

  brickFallIndex() {
    //gen random num between 1 - 4, if num === 4 then run handleFall
    let randomIndex = Math.floor(4*Math.random()+1);
    if (randomIndex === 4) {
      this.handleFall();
    }
  }

  resetBrick() {
    //iterate through bricks, and check if
    // cnvY > canvas.height, yes? cnvY = 0 and falling = false
    for (let i = 0; i < this.blocks.length; i++) {
      console.log('RB',this.blocks[i].cnvX);
      if (this.blocks[i].cnvY > this.ctx.canvas.height) {
        this.blocks[i].cnvY = -120;
        this.blocks[i].falling = false;
      }
    }
  }

  fall(dy = 2) {
    //iterate through array of bricks,
    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].falling) {
        this.coords.cnvY += dy;
      }
    }
    //check if each brick is falling, if falling === true, invoke next line
    // this.coords.cnvY += dy;
  }
}

export default Obstacle;
