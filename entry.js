import Game from './lib/game';
import Plane from './lib/plane';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let game = new Game(ctx);
  let p = new Plane(ctx);

  let stage;

  const animate = () => {
    draw();
    console.log('time');
    requestAnimationFrame(animate);
  };

  function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(`Score: ${game.score}`, 10, 30);
  }


  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    p.planeImg();
    
    drawScore();
  }

  animate();
});
