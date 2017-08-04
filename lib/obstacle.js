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
      cnvY: 0,
      obstW: 150,
      obstH: 60,
      falling: false
    };

    // this.drawBlock();
  }

  createBlocks() {
      if (this.coords.cnvX < 600) {
        let newCoords = Object.assign({}, this.coords);
        this.blocks.push(newCoords);
      }
      this.coords.cnvX += 150;
      // console.log('CNVX', this.coords.cnvX);
      // console.log('coords', this.coords);

      // console.log(this.blocks);
      // console.log(this.blocks[idx].cnvX);
  }

  drawBlock() {
    this.blocks.forEach((block, idx) => {
      // console.log('DRAWBLK', this.coords.cnvX);
        this.ctx.drawImage(
          this.img,
          block.clipX,
          block.clipY,
          block.clipW,
          block.clipH,
          block.cnvX,
          block.cnvY,
          block.obstW,
          block.obstH
        );
      // console.log(block.cnvX);
      // this.fall();
    });

  }

  handleFall() {
    if (this.blocks.length === 4) {
      let brickIndex = Math.round(3*Math.random());
      this.blocks[brickIndex].falling = true;
    }
  }

  brickFallIndex() {
    let randomIndex = Math.floor(10*Math.random()+1);
    if (randomIndex === 10) {
      this.handleFall();
    }
  }

  resetBrick() {
    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].cnvY > this.ctx.canvas.height) {
        this.blocks[i].cnvY = -120;
        this.blocks[i].falling = false;
      }
    }
  }

  fall(dy = 2) {
    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].falling) {
        this.blocks[i].cnvY += dy;
      }
    }
    //check if each brick is falling, if falling === true, invoke next line
    // this.coords.cnvY += dy;
  }
}

export default Obstacle;
