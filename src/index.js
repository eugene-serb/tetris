'use strict';

import Tetris from '@/tetris.js';

const params = {
  speedRate: 250,
  keyRating: 'es:tetris',
};

const tetris = new Tetris(params);
tetris.start();
