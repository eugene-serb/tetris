﻿'use strict';

import Timer from '@/timer.js';
import Score from '@/score.js';
import Map from '@/map.js';
import Matrix from '@/matrix.js';
import Tetromino from '@/tetromino.js';
import { getRandomInteger } from '@/support.js';

class Game {
  constructor() {
    this.#DOMs();
    this.#configurations();
    this.#eventListeners();

    this.#start();
  }

  getTetromino() {
    return new Tetromino({
      type: getRandomInteger(0, 7),
      color: getRandomInteger(0, 7),
    });
  }

  insertTetromino(map, figure) {
    const matrix = figure.matrix.value;
    const toColumn = figure.column;
    const toRow = figure.row;

    const result = map;

    for (let column = 0; column < matrix.length; column++) {
      for (let row = 0; row < matrix[column].length; row++) {
        if (matrix[column][row]) {
          result[toColumn + column][toRow + row] = matrix[column][row];
        }
      }
    }

    return result;
  }

  isValidMove(matrix, toColumn, toRow) {
    for (let column = 0; column < matrix.length; column++) {
      for (let row = 0; row < matrix[column].length; row++) {
        if (matrix[column][row] && (
          toRow + row < 0 ||
          toRow + row >= this.matrixState.value[0].length ||
          toColumn + column >= this.matrixState.value.length ||
          this.matrixState.value[toColumn + column][toRow + row]
        )) {
          return false;
        }
      }
    }
    return true;
  }

  rotate() {
    if (this.isValidMove(
      this.tetromino.matrix.value,
      this.tetromino.column,
      this.tetromino.row,
    )) {
      this.tetromino.rotate();
      this.#draw();
    }
  }

  moveToLeft() {
    if (this.isValidMove(
      this.tetromino.matrix.value,
      this.tetromino.column - 1,
      this.tetromino.row,
    )) {
      this.tetromino.toLeft();
      this.#draw();
    }
  }

  moveToRight() {
    if (this.isValidMove(
      this.tetromino.matrix.value,
      this.tetromino.column + 1,
      this.tetromino.row,
    )) {
      this.tetromino.toRight();
      this.#draw();
    }
  }

  moveToDown() {
    if (this.isValidMove(
      this.tetromino.matrix.value,
      this.tetromino.column,
      this.tetromino.row - 1,
    )) {
      this.tetromino.toDown();
      this.#draw();
    }
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
    this.timer = new Timer(this.$TIMER);
    this.score = new Score(this.$SCORE);

    this.isPaused = false;
    this.isSettled = false;
    this.canMove = true;

    this.tetromino = this.getTetromino();

    this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
  }

  #eventLoop() {
    this.#update();
    this.#draw();
    this.#eventHandler();
  }

  #update() {
    this.matrixRender = new Matrix({
      matrix: this.matrixState.copy(),
    });

    this.matrixRender = new Matrix({
      matrix: this.insertTetromino(this.matrixRender.copy(), this.tetromino),
    });
  }

  #draw() {
    this.matrixDraw = new Matrix({
      matrix: this.matrixRender.crop([[0, 0], [this.MAP_WIDTH, this.MAP_HEIGHT]]),
    });
    this.matrixDraw.matrix = this.matrixDraw.reflectY();
    this.map.matrix = this.matrixDraw.value;

    this.timer.draw();
    this.score.draw();
    this.map.draw();
  }

  #eventHandler() {
    if (!this.isValidMove(
      this.tetromino.matrix.value,
      this.tetromino.column,
      this.tetromino.row - 1,
    )) {
      this.matrixState = new Matrix({
        matrix: this.insertTetromino(this.matrixState.copy(), this.tetromino),
      });
      this.settled = true;
    } else {
      this.tetromino.row--;
    }

    if (this.settled) {
      this.tetromino = this.getTetromino();
      this.settled = false;
    }
  }

  #configurations() {
    this.MATRIX_WIDTH = 10;
    this.MATRIX_HEIGHT = 25;
    this.MAP_WIDTH = 10;
    this.MAP_HEIGHT = 20;
    this.SPEED_RATE = 250;
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
          this.moveToLeft();
        } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {
          this.rotate();
        } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
          this.moveToRight();
        } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
          this.moveToDown();
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
