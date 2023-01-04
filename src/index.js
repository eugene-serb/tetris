'use strict';

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
      empty: this.EMPTY_CELL,
    });
  }

  checkEndGame() {
    this.matrixState.value.forEach((column) => {
      if (column[19].exist) {
        this.isGameOver = true;
      }
    });
  }

  cleanRows() {
    let matrix = this.matrixState.copy();

    for (let row = 0; row < matrix[0].length; row++) {
      let streak = 0;

      for (let column = 0; column < matrix.length; column++) {
        if (matrix[column][row].exist) streak++;
      }

      if (streak === 10) {
        matrix = matrix.map((column) => {
          return Array.prototype.concat(
            column.slice(0, row),
            column.slice(row + 1, column.length),
            [this.EMPTY_CELL],
          );
        });
        
        this.score.increase(1);

        row--;
      }
    }

    this.matrixState = new Matrix({ matrix, empty: this.EMPTY_CELL });
  }

  insertTetromino(map, figure) {
    const matrix = figure.matrix.value;
    const toColumn = figure.column;
    const toRow = figure.row;

    const result = map;

    for (let column = 0; column < matrix.length; column++) {
      for (let row = 0; row < matrix[column].length; row++) {
        if (matrix[column][row].exist) {
          result[toColumn + column][toRow + row] = matrix[column][row];
        }
      }
    }

    return result;
  }

  isValidMove(matrix, toColumn, toRow) {
    for (let column = 0; column < matrix.length; column++) {
      for (let row = 0; row < matrix[column].length; row++) {
        if (toColumn + column >= this.matrixState.value.length ||
          toRow + row >= this.matrixState.value[0].length ||
          toColumn + column < 0 || toRow + row < 0) {
          return false;
        }

        if (matrix[column][row].exist &&
          this.matrixState.value[toColumn + column][toRow + row].exist) {
          return false;
        }
      }
    }
    return true;
  }

  rotate() {
    this.tetromino.rotateRight();

    if (this.isValidMove(
      this.tetromino.matrix.value,
      this.tetromino.column,
      this.tetromino.row,
    )) {
      this.#draw();
    } else {
      this.tetromino.rotateLeft();
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
    this.$DIALOG.innerHTML = 'Let\'s have fun!';

    this.matrixState = new Matrix({
      width: this.MATRIX_WIDTH,
      height: this.MATRIX_HEIGHT,
      empty: this.EMPTY_CELL,
    });
    this.matrixRender = this.matrixState.clone();
    this.matrixDraw = this.matrixRender.crop(
      [[0, 0], [this.MAP_WIDTH, this.MAP_HEIGHT]]);

    this.map = new Map(this.$MAP, this.matrixDraw);
    this.timer = new Timer(this.$TIMER);
    this.score = new Score(this.$SCORE);

    this.isGameOver = false;
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
      empty: this.EMPTY_CELL,
    });

    this.matrixRender = new Matrix({
      matrix: this.insertTetromino(this.matrixRender.copy(), this.tetromino),
      empty: this.EMPTY_CELL,
    });
  }

  #draw() {
    this.matrixDraw = new Matrix({
      matrix: this.matrixRender.crop([[0, 0], [this.MAP_WIDTH, this.MAP_HEIGHT]]),
      empty: this.EMPTY_CELL,
    });
    this.matrixDraw.matrix = this.matrixDraw.reflectY();
    this.map.matrix = this.matrixDraw.value;

    this.timer.draw();
    this.score.draw();
    this.map.draw();
  }

  #eventHandler() {
    this.checkEndGame();

    if (this.isGameOver) {
      this.$DIALOG.innerHTML = 'Game Over!';
      clearInterval(this.interval);
    }

    if (!this.isValidMove(
      this.tetromino.matrix.value,
      this.tetromino.column,
      this.tetromino.row - 1,
    )) {
      this.matrixState = new Matrix({
        matrix: this.insertTetromino(this.matrixState.copy(), this.tetromino),
        empty: this.EMPTY_CELL,
      });
      this.cleanRows();
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
    this.EMPTY_CELL = {
      exist: false,
      color: {
        light: '#F5F5F5',
        dark: '#055159',
      },
    };
  }

  #DOMs() {
    this.$MAP = document.querySelector('#map');
    this.$DIALOG = document.querySelector('#dialog');
    this.$SCORE = document.querySelector('#score');
    this.$TIMER = document.querySelector('#timer');
  }

  #eventListeners() {
    this.#keyboard();
  }

  #keyboard() {
    window.addEventListener('keydown', (e) => {
      if (!this.isGameOver) {
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
      }

      if (e.code === 'KeyR') {
        clearInterval(this.interval);
        this.#start();
      }

      if (e.code === 'KeyP') {
        if (!this.isGameOver) {
          if (this.isPaused === true) {
            this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
            this.isPaused = false;
          } else {
            clearInterval(this.interval);
            this.isPaused = true;
          }
        }
      }
    });
  }
}

new Game();
