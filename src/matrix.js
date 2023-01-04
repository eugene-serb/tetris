'use strict';

export class Matrix {
  constructor({ width = null, height = null, empty = null, matrix = null }) {
    if (matrix) {
      this.width = matrix.length;
      this.height = matrix[0].length;
      this.empty = empty;
      this.value = this.generate(this.width, this.height, this.empty);
      this.value = this.insert(matrix, 0, 0);
    } else {
      this.width = width;
      this.height = height;
      this.empty = empty;
      this.value = this.generate(this.width, this.height, this.empty);
    }
  }

  generate(width, height, empty) {
    const result = new Array();

    for (let x = 0; x < width; x++) {
      result[x] = new Array();
      for (let y = 0; y < height; y++) {
        result[x][y] = empty;
      }
    }

    return result;
  }

  clone() {
    const result = this.generate(
      this.value.length,
      this.value[0].length
    );

    for (let x = 0; x < this.value.length; x++) {
      for (let y = 0; y < this.value[x].length; y++) {
        result[x][y] = this.value[x][y];
      }
    }

    return new Matrix({ matrix: result });
  }

  copy() {
    const result = this.generate(
      this.value.length,
      this.value[0].length
    );

    for (let x = 0; x < this.value.length; x++) {
      for (let y = 0; y < this.value[x].length; y++) {
        result[x][y] = this.value[x][y];
      }
    }

    return result;
  }

  crop(coordinates) {
    const width = Math.abs(coordinates[1][0] - coordinates[0][0]);
    const height = Math.abs(coordinates[1][1] - coordinates[0][1]);

    const result = this.generate(width, height);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let x2 = coordinates[0][0] + x;
        let y2 = coordinates[0][1] + y;
        result[x][y] = this.value[x2][y2];
      }
    }

    return result;
  }

  insert(figure, x, y) {
    const result = this.copy();

    let rx = x;
    for (let i = 0; i < figure.length; i++) {
      let ry = y;
      for (let j = 0; j < figure[0].length; j++) {
        result[rx][ry] = figure[i][j];
        ry++;
      }
      rx++;
    }

    return result;
  }

  reflectX() {
    return this.copy().reverse();
  }

  reflectY() {
    const result = this.generate(
      this.value.length,
      this.value[0].length
    );

    for (let x = 0; x < this.value.length; x++) {
      result[x] = this.value[x].reverse();
    }

    return result;
  }

  rotateLeft() {
    const result = this.generate(this.value[0].length, this.value.length);

    for (let x = 0; x < this.value.length; x++) {
      for (let y = 0; y < this.value[x].length; y++) {
        let x2 = this.value[x].length - 1 - y;
        let y2 = x;
        result[x2][y2] = this.value[x][y];
      }
    }

    return result;
  }

  rotateRight() {
    const result = this.generate(this.value[0].length, this.value.length);

    for (let x = 0; x < this.value.length; x++) {
      for (let y = 0; y < this.value[x].length; y++) {
        let x2 = y;
        let y2 = this.value.length - 1 - x;
        result[x2][y2] = this.value[x][y];
      }
    }

    return result;
  }
}

export default Matrix;
