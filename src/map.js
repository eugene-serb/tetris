'use strict';

export class Map {
  constructor(container, matrix) {
    this.$container = container;
    this.matrix = matrix;
    this.mapWidth = matrix.length;
    this.mapHeight = matrix[0].length;

    this.#init();
    this.draw();
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let x = 0; x < this.mapWidth; x++) {
      for (let y = 0; y < this.mapHeight; y++) {
        this.context.fillStyle = this.matrix[x][y].color[this.theme];
        this.context.fillRect(
          x * this.cellWidth,
          y * this.cellHeight,
          this.cellWidth,
          this.cellHeight,
        );
      }
    }
  }

  #init() {
    this.$container.innerHTML = '';

    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    this.$container.appendChild(this.canvas);
    this.#updateSizes();

    window.addEventListener('resize', () => {
      this.#updateSizes();
    });

    this.media = window.matchMedia('(prefers-color-scheme: dark)');
    this.#updateColours(this.media);

    this.media.addEventListener('change', () => {
      this.#updateColours(this.media);
    });
  }

  #updateSizes() {
    this.canvas.width = 0;
    this.canvas.height = 0;

    this.ratio = this.mapHeight / this.mapWidth;

    this.canvas.width = this.$container.offsetWidth;
    this.canvas.height = this.canvas.width * this.ratio;

    this.cellWidth = this.canvas.width / this.mapWidth;
    this.cellHeight = this.canvas.height / this.mapHeight;

    this.draw();
  }

  #updateColours(media) {
    if (media.matches) {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }

    this.draw();
  }
}

export default Map;
