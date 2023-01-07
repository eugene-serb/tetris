'use strict';

export class Keyboard {
  constructor(context) {
    this._context = context;
    this.#handle();
  }

  #handle() {
    window.addEventListener('keydown', (e) => {
      if (!this._context.isGameOver) {
        if (this._context.canMove === true) {
          if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
            this._context.moveToLeft();
          } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {
            this._context.rotate();
          } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
            this._context.moveToRight();
          } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
            this._context.moveToDown();
          }
        }
      }

      if (e.code === 'KeyR') {
        clearInterval(this._context.interval);
        this._context.start();
      }

      if (e.code === 'KeyP') {
        if (!this._context.isGameOver) {
          if (this._context.isPaused === true) {
            this._context.interval = setInterval(
              this._context._eventLoop.bind(this._context),
              this._context.SPEED_RATE,
            );
            this._context.isPaused = false;
          } else {
            clearInterval(this._context.interval);
            this._context.isPaused = true;
          }
        }
      }
    });
  }
}

export default Keyboard;
