'use strict';

import Support from '@/support.js';
import Timer from '@/timer.js';
import Score from '@/score.js';
import Map from '@/map.js';

class Game {
  constructor() {
    this.#DOMs();
    this.#configurations();
    this.#eventListeners();

    this.#start();
  }

  #start() {
    this.support = new Support();
    this.timer = new Timer(this.$TIMER);
    this.score = new Score(this.$SCORE);
    this.map = new Map(this.$MAP, this.MAP_WIDTH, this.MAP_HEIGHT);

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
    this.score.draw();
    this.map.draw();
  }

  #eventHandler() {
  }

  #configurations() {
    this.MATRIX_WIDTH = 10;
    this.MATRIX_HEIGHT = 24;
    this.MAP_WIDTH = 10;
    this.MAP_HEIGHT = 20;
    this.SPEED_RATE = 50;
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
