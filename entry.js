import Game from './lib/game';
import Plane from './lib/plane';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let game = new Game(ctx);
  let p = new Plane(ctx);
  let leftPressed;
  let rightPressed;

  let stage;

  window.addEventListener("keydown", event => {
    return keyDownHandler(event);
  });
  window.addEventListener("keyup", event => {
      return keyUpHandler(event);
  });

  function keyDownHandler(e) {
    console.log(e);
    if (e.keyCode === 39) {
      rightPressed = true;
      p.move(-5);
    } else if (e.KeyCode === 37) {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode === 39) {
      rightPressed = false;
    } else if (e.keyCode === 37) {
      leftPressed = false;
    }
  }

  const animate = () => {
    display();
    requestAnimationFrame(animate);
  };

  function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(`Score: ${game.score}`, 10, 30);
  }

  function display() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    p.planeImg();

    drawScore();
  }

  animate();
});
