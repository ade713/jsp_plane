import Game from './lib/game';
import Plane from './lib/plane';
import Projectile from './lib/projectile';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let game = new Game(ctx);
  let plane = new Plane(ctx);
  let proj = new Projectile(ctx);
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

    plane.planeImg();

    drawScore(game.score());
  }

  const animate = () => {
    display();

    if (!paused) {
      requestAnimationFrame(animate);
    }
  };

  paused = false;

  function togglePause() {
    paused = !paused;
    if (!paused) {
      animate();
    }
    document.getElementById("pauseButton").value = paused ? "unpause" : "pause";
  }

  document.addEventListener('click', () => {
    togglePause();
  });

  animate();
});
