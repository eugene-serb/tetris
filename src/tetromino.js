'use strict';

const tetrominos = [
  [
    [1, 1, 1, 1],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
];

const colors = [
  'cyan',
  'yellow',
  'purple',
  'green',
  'red',
  'blue',
  'orange',
];

export class Tetromino {
  constructor({ type, color, column = 5, row = 21 }) {
    this.matrix = tetrominos[type];
    this.color = colors[color];
    this.column = column;
    this.row = row;
  }
}

export default Tetromino;
