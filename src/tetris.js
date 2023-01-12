'use strict';

import { getRandomInteger } from '@/helpers.js';
import Gameloop from '@/gameloop.js';
import Matrix from '@/matrix.js';
import Tetromino from '@/tetromino.js';
import Drawer from '@/drawer.js';
import Score from '@/score.js';
import Timer from '@/timer.js';
import Rating from '@/rating.js';
import Keyboard from '@/keyboard.js';
import Gamepad from '@/gamepad.js';

export class Tetris extends Gameloop {
  constructor(params) {
    super();

    this._params = params;

    this.SPEED_RATE = (this._params?.speedRate &&
      typeof this._params?.speedRate === 'number'
    ) ? this._params?.speedRate : 250;

    this.KEY_RATING = (this._params?.keyRating &&
      typeof this._params?.keyRating === 'string'
    ) ? this._params?.keyRating : 'tetris';

    this.#DOMs();
    this.#configurations();
    this.#eventListeners();
    this.#init();
  }

  getTetromino() {
    return new Tetromino({
      type: getRandomInteger(0, 7),
      color: getRandomInteger(0, 7),
      empty: this.EMPTY_CELL,
    });
  }

  checkEndGame() {
    for (let i = 0; i < this.matrixState.value.length; i++) {
      if (this.matrixState.value[i][19].exist) {
        this.setGameOver();
        break;
      }
    }
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

    this.matrixState = new Matrix(null, null, this.EMPTY_CELL, matrix);
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
    if (this.canMove) {
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
  }

  moveToLeft() {
    if (this.canMove) {
      if (this.isValidMove(
        this.tetromino.matrix.value,
        this.tetromino.column - 1,
        this.tetromino.row,
      )) {
        this.tetromino.toLeft();
        this.#draw();
      }
    }
  }

  moveToRight() {
    if (this.canMove) {
      if (this.isValidMove(
        this.tetromino.matrix.value,
        this.tetromino.column + 1,
        this.tetromino.row,
      )) {
        this.tetromino.toRight();
        this.#draw();
      }
    }
  }

  moveToDown() {
    if (this.canMove) {
      if (this.isValidMove(
        this.tetromino.matrix.value,
        this.tetromino.column,
        this.tetromino.row - 1,
      )) {
        this.tetromino.toDown();
        this.#draw();
      }
    }
  }

  start() {
    super.start();
    this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
  }

  setGameOver() {
    super.setGameOver();

    const score = this.score.value;
    const time = this.timer.value;

    this.rating.add(score, time);
    this.drawRating();
  }

  clear() {
    super.clear();
    this.#init();
  }

  drawRating() {
    this.$RATING.innerHTML = '';

    const rating = this.rating.value;

    for (let i = 0; i < rating.length && i < 10; i++) {
      const row = document.createElement('tr');
      const a = document.createElement('td');
      const b = document.createElement('td');
      const c = document.createElement('td');
      const d = document.createElement('td');

      const time = new Date(rating[i].date)

      a.innerText = i + 1;
      b.innerText = rating[i].score;
      c.innerText = rating[i].time;
      d.innerText = time.toLocaleDateString();

      row.append(a, b, c, d);

      this.$RATING.appendChild(row);
    }
  }

  #init() {
    this.isSettled = false;

    this.$DIALOG.innerHTML = 'Let\'s have fun!';

    this.rating = new Rating(this.KEY_RATING);
    this.drawRating();

    this.timer = new Timer();
    this.score = new Score();

    this.matrixState = new Matrix(
      this.MATRIX_WIDTH,
      this.MATRIX_HEIGHT,
      this.EMPTY_CELL,
    );

    this.matrixRender = this.matrixState.clone();

    this.matrixDraw = this.matrixRender.clone();
    this.matrixDraw.crop(
      { x: 0, y: 0 },
      { x: this.MAP_WIDTH, y: this.MAP_HEIGHT },
    );
    this.matrixDraw.reflectY();

    this.drawer = new Drawer(this.$MAP, this.matrixDraw.value);

    this.tetromino = this.getTetromino();
  }

  #eventLoop() {
    this.#update();
    this.#draw();
    this.#eventHandler();
  }

  #update() {
    this.matrixRender = new Matrix(
      null,
      null,
      this.EMPTY_CELL,
      this.insertTetromino(this.matrixState.copy(), this.tetromino),
    );
  }

  #draw() {
    this.$SCORE.innerText = `Score: ${this.score.value}`;
    this.$TIMER.innerText = `Time: ${this.timer.value}`;

    this.matrixDraw = this.matrixRender.clone();
    this.matrixDraw.crop(
      { x: 0, y: 0 },
      { x: this.MAP_WIDTH, y: this.MAP_HEIGHT },
    );
    this.matrixDraw.reflectY();

    this.drawer.matrix = this.matrixDraw.value;
    this.drawer.draw();
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
      this.matrixState = new Matrix(
        null,
        null,
        this.EMPTY_CELL,
        this.insertTetromino(this.matrixState.copy(), this.tetromino),
      );
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

  #eventListeners() {
    this.keyboard = new Keyboard(this);
    this.gamepad = new Gamepad(this);
  }

  #configurations() {
    this.MATRIX_WIDTH = 10;
    this.MATRIX_HEIGHT = 25;
    this.MAP_WIDTH = 10;
    this.MAP_HEIGHT = 20;
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
    this.$RATING = document.querySelector('#rating');
  }
}

export default Tetris;
