'use strict';

import Support from '@/support.js';
import Timer from '@/timer.js';
import Score from '@/score.js';
import Map from '@/map.js';
import Matrix from '@/matrix.js';
import Tetromino from '@/tetromino.js';

class Game {
  constructor() {
    this.#DOMs();
    this.#configurations();
    this.#eventListeners();

    this.#start();
  }

  generateTetromino() {
    return new Tetromino({
      type: this.support.getRandomInteger(0, 8),
      color: this.support.getRandomInteger(0, 8),
      column: this.support.getRandomInteger(0, 10),
    });
  }

  #start() {
    this.matrixState = new Matrix({
      width: this.MATRIX_WIDTH,
      height: this.MATRIX_HEIGHT,
    });
    this.matrixRender = this.matrixState.clone();
    this.matrixDraw = this.matrixRender.crop([[0, 4], [10, 24]]);

    this.map = new Map(this.$MAP, this.matrixDraw);
    this.support = new Support();
    this.timer = new Timer(this.$TIMER);
    this.score = new Score(this.$SCORE);

    this.isPaused = false;
    this.isSettled = false;
    this.canMove = true;

    this.tetromino = new Tetromino({
      type: this.support.getRandomInteger(0, 8),
      color: this.support.getRandomInteger(0, 8),
      column: this.support.getRandomInteger(0, 10),
    });

    this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
  }

  #eventLoop() {
    this.#update();
    this.#draw();
    this.#eventHandler();
  }

  #update() {
    this.matrixRender = this.matrixState.clone();

    const figure = JSON.parse(JSON.stringify(this.tetromino.matrix));
    const x = this.tetromino.column;
    const y = this.tetromino.row;
    const matrix = this.matrixRender.inject(figure, x, y);

    this.matrixRender = new Matrix({ matrix });

    this.tetromino.row--;
  }

  #draw() {
    this.matrixDraw = new Matrix({
      matrix: this.matrixRender.crop([[0, 0], [10, 20]]),
    });

    this.matrixDraw.matrix = this.matrixDraw.reflectY();

    this.map.matrix = this.matrixDraw.matrix;

    this.timer.draw();
    this.score.draw();
    this.map.draw();
  }

  #eventHandler() {
    if (this.tetromino.row === 0) {
      this.settled = true;
    }

    if (this.settled) {
      this.tetromino = this.generateTetromino();
      this.settled = false;
    }
  }

  #configurations() {
    this.MATRIX_WIDTH = 10;
    this.MATRIX_HEIGHT = 24;
    this.MAP_WIDTH = 10;
    this.MAP_HEIGHT = 20;
    this.SPEED_RATE = 500;
  }

  #DOMs() {
    this.$MAP = document.querySelector('#map');
    this.$SCORE = document.querySelector('#score');
    this.$TIMER = document.querySelector('#timer');
    this.$RATING = document.querySelector('#rating');
  }

  #eventListeners() {
    this.#keyboard();
  }

  #keyboard() {
    window.addEventListener('keydown', (e) => {
      if (this.canMove === true) {
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
          // Rotate
        } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {
          // to Left
        } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
          // to Rigth
        } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
          // Fast move to down
        }
      }

      if (e.code === 'KeyR') {
        clearInterval(this.interval);
        this.#start();
      }

      if (e.code === 'KeyP') {
        if (this.isPaused === true) {
          this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
          this.isPaused = false;
        } else {
          clearInterval(this.interval);
          this.isPaused = true;
        }
      }
    });
  }
}

new Game();
