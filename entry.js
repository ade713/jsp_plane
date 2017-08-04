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
  let lives = 1;
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
    ctx.fillText(`Lives: ${livesLeft}`, 500, 30);
  }

  function gameOver() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.fillRect(0, 200, canvas.width, 400);
    ctx.fillStyle = '#F00';
    ctx.font = '60px Arial';
    ctx.fillText("GAME OVER", 125, 400);
    ctx.fillText(`SCORE: ${Date.now - Game.timeStart}`, 125, 500);
  }

  function collisionDetection() {
    for (let i = 0; i < obst.blocks.length; i++) {
      if (
        ((plane.coords.cnvX > obst.blocks[i].cnvX && plane.coords.cnvX < obst.blocks[i].cnvX+obst.blocks[i].obstW) ||
          (plane.coords.cnvX+plane.coords.planeW > obst.blocks[i].cnvX && plane.coords.cnvX+plane.coords.planeW < obst.blocks[i].cnvX+obst.blocks[i].obstW)) &&
        ((plane.coords.cnvY > obst.blocks[i].cnvY && plane.coords.cnvY < obst.blocks[i].cnvY+obst.blocks[i].obstH) ||
        (plane.coords.cnvY+plane.coords.planeH > obst.blocks[i].cnvY && plane.coords.cnvY+plane.coords.planeH < obst.blocks[i].cnvY+obst.blocks[i].obstH)
        )
      ) {
        lives--;
        // if (!lives) {
        //
        // };
        obst.blocks[i].cnvY = -80;
      }
    }
  }

  paused = true;
  playSound = true;

  // window.onload welcome page
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
  function display() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (lives > 0) {
      let dx = 5;
      if (keyPress === 39) {
        plane.move(dx);
      } else if (keyPress === 37) {
        plane.move(-dx);
      }

      obst.createBlocks();
      obst.drawBlock();
      obst.brickFallIndex();
      obst.fall();
      obst.resetBrick();
      collisionDetection();
      plane.planeImg();

      drawScore(game.score());
      drawLives(lives);
    } else {
      gameOver();
    }
  }

  const animate = () => {
    if (!paused) {
      requestAnimationFrame(animate);
    }

    display();
  };

// background music
  // playSound = true;
  gameMusic.play().loop;
  gameMusic.muted = toggleSound();
  const soundButton = document.getElementById("soundButton");
  soundButton.addEventListener('click', () => {
    toggleSound();
  });

  let mute = false;
  function toggleSound() {
    playSound = !playSound;

   // gameMusic.muted = true;
    if (playSound) {
      console.log('SOUND', playSound);
      gameMusic.play().loop;
    }
  }

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
