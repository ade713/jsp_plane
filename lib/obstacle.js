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
      cnvY: -80,
      obstW: 60,
      obstH: 60,
      falling: false
    };
  }

  createBlocks() {
    if (this.coords.cnvX < 600) {
      let newCoords = Object.assign({}, this.coords);
      this.blocks.push(newCoords);
    }
    this.coords.cnvX += 60;
  }

  drawBlock() {
    this.blocks.forEach((block, idx) => {
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
    });
  }

  handleFall() {
    if (this.blocks.length === 10) {
      let brickIndex = Math.round(9*Math.random());
      this.blocks[brickIndex].falling = true;
    }
  }

  brickFallIndex() {
    let randomIndex = Math.floor(12*Math.random()+1);
    if (randomIndex === 12) {
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

  fall(score) {
    let baseSpeed; // = 4;

    console.log('SCR', score);

    if (score > 60) {
      baseSpeed = 12;
    } else if (score > 45) {
      baseSpeed = 10;
    } else if (score > 45) {
      baseSpeed = 8;
    } else if (score > 30) {
      baseSpeed = 6;
    } else if (score > 15) {
      baseSpeed = 5;
    } else {
      baseSpeed = 4;
    }
    
    let dy = Math.floor(3 * Math.random() + baseSpeed);
    console.log('bSPD', baseSpeed);
    console.log('dY', dy);

    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].falling) {
        this.blocks[i].cnvY += dy;
      }
    }
  }
}

export default Obstacle;
