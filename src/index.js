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
      type: this.support.getRandomInteger(0, 7),
      color: this.support.getRandomInteger(0, 7),
    });
  }

  #start() {
    this.matrixState = new Matrix({
      width: this.MATRIX_WIDTH,
      height: this.MATRIX_HEIGHT,
    });
    this.matrixRender = this.matrixState.clone();
    this.matrixDraw = this.matrixRender.crop(
      [[0, 0], [this.MAP_WIDTH, this.MAP_HEIGHT]]);

    this.map = new Map(this.$MAP, this.matrixDraw);
    this.support = new Support();
    this.timer = new Timer(this.$TIMER);
    this.score = new Score(this.$SCORE);

    this.isPaused = false;
    this.isSettled = false;
    this.canMove = true;

    this.tetromino = this.generateTetromino();

    this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
  }

  #eventLoop() {
    this.#update();
    this.#render();
    this.#draw();
    this.#eventHandler();
  }

  #update() {
    this.tetromino.row--;
  }

  #render() {
    this.matrixRender = new Matrix({
      matrix: this.matrixState.copy()
    });

    const matrix = this.matrixRender.insert(
      this.tetromino.matrix,
      this.tetromino.column,
      this.tetromino.row,
    );

    this.matrixRender = new Matrix({ matrix });
  }

  #draw() {
    this.matrixDraw = new Matrix({
      matrix: this.matrixRender.crop([[0, 0], [this.MAP_WIDTH, this.MAP_HEIGHT]]),
    });
    this.matrixDraw.matrix = this.matrixDraw.reflectY();
    this.map.matrix = this.matrixDraw.matrix;

    this.timer.draw();
    this.score.draw();
    this.map.draw();
  }

  #eventHandler() {
    if (this.tetromino.row === 0) {
      const newState = this.matrixState.insert(
        this.tetromino.matrix,
        this.tetromino.column,
        this.tetromino.row,
      );
      this.matrixState = new Matrix({ matrix: newState });

      this.settled = true;
    }

    if (this.settled) {
      this.tetromino = this.generateTetromino();
      this.settled = false;
    }
  }

  #configurations() {
    this.MATRIX_WIDTH = 10;
    this.MATRIX_HEIGHT = 25;
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
