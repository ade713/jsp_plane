import Game from './lib/game';
import Plane from './lib/plane';
import Projectile from './lib/projectile';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let game = new Game(ctx);
  let plane = new Plane(ctx);
  let proj = new Projectile(ctx);

  let keyPress;
  window.addEventListener("keydown", event => {
    keyPress = event.keyCode;
  });
  window.addEventListener("keyup", event => {
    keyPress = false;
  });

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
    let dx = 5;
    let speed = -15;

    if (keyPress === 39) {
      plane.move(dx);
    } else if (keyPress === 37) {
      plane.move(-dx);
    } else if (keyPress === 32) {
      proj.shoot(speed);
    }
    plane.planeImg();
    proj.projectileImg();

    drawScore();
  }

  animate();
});
