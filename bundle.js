/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Plane {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = './assets/planes.png';

    this.coords = {
      clipX: 140,
      clipY: 500,
      clipW: 80,
      clipH: 100,
      cnvX: 275,
      cnvY: 740,
      planeW: 48,
      planeH: 60
    };

    this.planeImg();
  }

  planeImg() {
    this.ctx.drawImage(
      this.img,
      this.coords.clipX,
      this.coords.clipY,
      this.coords.clipW,
      this.coords.clipH,
      this.coords.cnvX,
      this.coords.cnvY,
      this.coords.planeW,
      this.coords.planeH
    );
  }

  move(dx) {
    if (this.coords.cnvX > 0 && dx < 0 ) {
      this.coords.cnvX += dx;
    } else if (this.coords.cnvX < (this.ctx.canvas.width - this.coords.planeW) && dx > 0) {
      this.coords.cnvX += dx;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Plane);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    let baseSpeed;

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

    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].falling) {
        this.blocks[i].cnvY += dy;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Obstacle);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_plane__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_obstacle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_projectile__ = __webpack_require__(4);





document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let game = new __WEBPACK_IMPORTED_MODULE_0__lib_game__["a" /* default */](ctx);
  let plane = new __WEBPACK_IMPORTED_MODULE_1__lib_plane__["a" /* default */](ctx);
  let proj = new __WEBPACK_IMPORTED_MODULE_3__lib_projectile__["a" /* default */](ctx);
  let obst = new __WEBPACK_IMPORTED_MODULE_2__lib_obstacle__["a" /* default */](ctx);

  let paused;
  let keyPress;
  let lives;
  let playSound;

  const gameMusic = new Audio('./assets/guile_theme.mp3');
  const planeSFX = new Audio('./assets/jet_sfx.wav');
  const collisionSFX = new Audio('./assets/explode.wav');

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
    ctx.fillText("GAME OVER", 125, 375);
    ctx.fillText(`SCORE: ${game.score()}`, 150, 475);
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
        collisionSFX.play();
        lives--;
        obst.blocks[i].cnvY = -80;
      }
    }
  }

  paused = true;
  // playSound = true;
  lives = 2;
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
      obst.fall(game.score());
      obst.resetBrick();
      collisionDetection();
      plane.planeImg();

      drawScore(game.score());
      drawLives(lives);
    } else {
      gameOver();
      paused = true;
    }
  }

  const animate = () => {
    if (!paused) {
      requestAnimationFrame(animate);
    }

    display();
  };

// background music
  playSound = true;
  gameMusic.play().loop;
  const soundButton = document.getElementById("soundButton");
  soundButton.addEventListener('click', () => {
    toggleSound();
  });

  function toggleSound() {
    playSound = !playSound;

    if (playSound) {
      gameMusic.muted = false;
      planeSFX.muted = false;
      collisionSFX.muted = false;
    } else {
      gameMusic.muted = true;
      planeSFX.muted = true;
      collisionSFX.muted = true;
    }
  }

// Start button
  const startButton = document.getElementById("startButton");
  startButton.addEventListener('click', () => {
    togglePause();
    paused = false;
    game = new __WEBPACK_IMPORTED_MODULE_0__lib_game__["a" /* default */](ctx);
    plane = new __WEBPACK_IMPORTED_MODULE_1__lib_plane__["a" /* default */](ctx);
    proj = new __WEBPACK_IMPORTED_MODULE_3__lib_projectile__["a" /* default */](ctx);
    obst = new __WEBPACK_IMPORTED_MODULE_2__lib_obstacle__["a" /* default */](ctx);
    lives = 4;
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plane__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obstacle__ = __webpack_require__(1);



class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.plane = new __WEBPACK_IMPORTED_MODULE_0__plane__["a" /* default */](this.ctx);
    this.plane.planeImg();
    this.obstacle = new __WEBPACK_IMPORTED_MODULE_1__obstacle__["a" /* default */](this.ctx);
    this.timeStart = Date.now();
  }

  score() {
    let currentTime = Date.now();
    return Math.floor(((currentTime - this.timeStart) / 1000));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plane_js__ = __webpack_require__(0);


class Projectile {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = './assets/blue_shot.png';

    this.coords = {
      clipX: 0,
      clipY: 0,
      clipW: 150,
      clipH: 450,
      cnvX: 292,
      cnvY: 710,
      projW: 12,
      projH: 36
    };

    this.projectileImg();
  }

  projectileImg() {
    this.ctx.drawImage(
      this.img,
      this.coords.clipX,
      this.coords.clipY,
      this.coords.clipW,
      this.coords.clipH,
      this.coords.cnvX,
      this.coords.cnvY,
      this.coords.projW,
      this.coords.projH
    );
  }

  shoot(speed, planeX) {
    this.coords.cnvX = planeX + 17;
    this.coords.cnvY += speed;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Projectile);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map