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
  let lives;


  window.addEventListener("keydown", event => {
    keyPress = event.keyCode;
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

  lives = 2;

  function drawLives(livesLeft) {
    console.log('LIVE');
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(`Lives: ${livesLeft}`, 520, 30);
  }

  obst.createBlocks();

  let bricks = [];
  for (let i = 0; i < 4; i++) {
    bricks[i] = new Obstacle(ctx);
  }

  // window.onload welcome page
  paused = true;
  window.onload = () => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00F';
    ctx.font = '40px Arial';
    ctx.fillText("WELCOME", 200, 250);
    ctx.fillText("TO", 275, 350);
    ctx.fillText("UNITED AIRFORCE", 125, 450);
  };

  // render screen objects
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

    bricks.forEach((brick, i) => {
      brick.drawBlock();
      brick.fall(Math.floor(Math.random()*(4)) + 1);
    });

    plane.planeImg();

    drawScore(game.score());
    drawLives(lives);
  }

  const animate = () => {
    if (!paused) {
      requestAnimationFrame(animate);
    }

    display();
  };

// Pause functiononality
  // paused = false;
  let pauseButton;
  pauseButton = document.getElementById("pauseButton");
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
