// 
// class Game {
//   constructor(canvas) {
//     this.ctx = canvas.getContext('2d');
//     this.score = 0;
//     this.gameTime = 0;
//     console.log('HERE');
//   }
//
//
//   gameTime() {
//     let time = createjs.Ticker.getTime();
//     let seconds = Math.floor(time * 1000);
//     return seconds;
//   }
//
//   score() {
//     return 2 * this.gameTime();
//   }
//
//   drawScore() {
//     this.ctx.font = '20px Arial';
//     this.ctx.fillStyle = '#000';
//     this.ctx.fillText(`Score: ${this.score}`, 15, 30);
//   }
// }
//
// export default Game;
