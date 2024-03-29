'use strict';

import Matrix from '@/engine/matrix.js';
import tetrominos from '@/assets/tetrominos.json';
import colors from '@/assets/colors.json';

export class Tetromino {
  constructor({ type = null, color = null, column = 5, row = 21, empty = null }) {
    this.type = type;
    this.color = colors[color];
    this.column = column;
    this.row = row;
    this.empty = empty;
    this.matrix = this.#generate();
  }

  toLeft() {
    this.column--;
  }

  toRight() {
    this.column++;
  }

  toDown() {
    this.row--;
  }

  rotateLeft() {
    this.matrix.rotateLeft();
  }

  rotateRight() {
    this.matrix.rotateRight();
  }

  #generate() {
    return new Matrix(null, null, this.empty, this.#generateMatrix());
  }

  #generateMatrix() {
    return tetrominos[this.type].map((column) => {
      return column.map((cell) => {
        if (cell === 0) {
          return this.empty;
        } else {
          return {
            exist: true,
            color: {
              light: this.color.light,
              dark: this.color.dark,
            },
          };
        }
      });
    });
  }
}

export default Tetromino;
