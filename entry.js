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

  obst.createBlocks();

  let bricks = [];
  for (let i = 0; i < 4; i++) {
    bricks[i] = new Obstacle(ctx);
  }



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

    // obst.drawBlock();
    // if () {
    //  call fall
    // }

    plane.planeImg();

    drawScore(game.score());
  }

  const animate = () => {
    display();

    if (!paused) {
      requestAnimationFrame(animate);
    }
  };

// Pause functiononality
  paused = false;
  let pauseButton;
  pauseButton = document.getElementById("pauseButton");

  function togglePause() {
    paused = !paused;
    if (!paused) {
      animate();
    }
    // pauseButton = document.getElementById("pauseButton").value = paused ? "unpause" : "pause";
  }

  pauseButton.addEventListener('click', () => {
    togglePause();
  });


  animate();
});
