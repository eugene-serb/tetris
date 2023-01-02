'use strict';

import tetrominos from '@/assets/tetrominos.json';
import colors from '@/assets/colors.json';
import Matrix from '@/matrix.js';

export class Tetromino {
  constructor({ type = null, color = null, column = 5, row = 21 }) {
    this.type = type;
    this.color = colors[color];
    this.column = column;
    this.row = row;
    this.matrix = this.generate();
  }

  generate() {
    return new Matrix({ matrix: tetrominos[this.type] });
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

  rotate() {
    this.matrix = new Matrix({ matrix: this.matrix.rotateRight() })
  }
}

export default Tetromino;
