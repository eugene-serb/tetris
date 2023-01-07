'use strict';

import Tetris from '@/tetris.js';

const params = {
  speedRate: 250,
};

const tetris = new Tetris(params);
tetris.start();
