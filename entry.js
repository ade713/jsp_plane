import Game from './lib/game';
import Plane from './lib/plane';
import Obstacle from './lib/obstacle';
import Projectile from './lib/projectile';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let game = new Game(ctx);
  let plane = new Plane(ctx);
  let proj = new Projectile(ctx);
  let obst = new Obstacle(ctx);

  let paused;
  let keyPress;
  let lives = 2;
  let playSound;

  const gameMusic = new Audio('./assets/guile_theme.mp3');
  const planeSFX = new Audio('./assets/jet_sfx.wav');

  window.addEventListener("keydown", event => {
    keyPress = event.keyCode;
    if (keyPress === 37 || keyPress === 39) {
      planeSFX.play();
    }
  });
  window.addEventListener("keyup", event => {
    if (keyPress === 32) {
      keyPress;
    } else {
      keyPress = false;
    }
  });

  function drawScore(score) {
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(`Score: ${score}`, 10, 30);
  }

  function drawLives(livesLeft) {
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(`Lives: ${livesLeft}`, 520, 30);
  }

  function collisionDetection() {
    for (let i = 0; i < obst.blocks.length; i++) {
      // obst.blocks[i]
      if ((plane.coords.cnvX < obst.blocks[i].cnvX + //obst.blocks[i].cnvW &&
          plane.coords.cnvX + plane.coords.planeW > obst.blocks[i].cnvX) &&
          (plane.coords.cnvY < obst.blocks[i].cnvY + obst.blocks[i].obstH &&
           plane.coords.cnvY + plane.coords.planeH > obst.blocks[i].cnvY)) {
        lives--;
        plane.cnvX = 275;
        plane.cnvY = 740;
      }
    }
  }

  // window.onload welcome page
  paused = true;
  playSound = true;

  window.onload = () => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.font = '40px Arial';
    ctx.fillText("WELCOME", 200, 250);
    ctx.fillText("TO", 275, 350);
    ctx.fillText("UNITED AIRFORCE", 125, 450);
  };

  // render screen objects
  // obst.createBlocks();

  function display() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let dx = 5;
    let speed = -5;

    if (keyPress === 39) {
      plane.move(dx);
    } else if (keyPress === 37) {
      plane.move(-dx);
    } else if (keyPress === 32) {
      proj.projectileImg();
      proj.shoot(speed, plane.coords.fieldX);
    }

    // console.log('Display BLOCKS', obst.blocks);
    obst.createBlocks();
    obst.drawBlock();
    //call obst.fall
    obst.brickFallIndex();
    obst.fall();
    //invoke obst.handleFall
    //obst.resetBrick
    obst.resetBrick();

    plane.planeImg();

    collisionDetection();

    drawScore(game.score());
    drawLives(lives);
  }

  const animate = () => {
    if (!paused) {
      requestAnimationFrame(animate);
    }

    display();
  };

  const soundButton = document.getElementById("soundButton");
  soundButton.addEventListener('click', () => {
    toggleSound();
  });

  function toggleSound() {
    playSound = !playSound;
    // gameMusic.play();

    gameMusic.muted = true;
    if (playSound) {
      gameMusic.play();
    }
  }

// restart game???
// window location reload function

// Start button
  const startButton = document.getElementById("startButton");
  startButton.addEventListener('click', () => {
    togglePause();
  });

// Pause functiononality
  const pauseButton = document.getElementById("pauseButton");
  pauseButton.addEventListener('click', () => {
    togglePause();
  });

  function togglePause() {
    paused = !paused;
    if (!paused) {
      animate();
    }
  }

  animate();
});
