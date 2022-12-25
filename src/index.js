'use strict';

import Timer from '@/timer.js';

class Game {
  constructor() {
    this.#DOMs();
    this.#configurations();
    this.#eventListeners();

    this.#start();
  }

  #start() {
    this.timer = new Timer(this.$TIMER);

    this.isPaused = false;
    this.canMove = true;

    this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
  }

  #eventLoop() {
    this.#update();
    this.#draw();
    this.#eventHandler();
  }

  #update() {
  }

  #draw() {
    this.timer.draw();
  }

  #eventHandler() {
  }

  #configurations = () => {
    this.MATRIX_WIDTH = 10;
    this.MATRIX_HEIGHT = 24;
    this.SPEED_RATE = 1000;
  };

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
          console.log('keydown', e.code);
        } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {
          console.log('keydown', e.code);
        } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
          console.log('keydown', e.code);
        } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
          console.log('keydown', e.code);
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
