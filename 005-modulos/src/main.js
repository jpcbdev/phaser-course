import SceneOne from './scenes/SceneOne.js';
import SceneTwo from './scenes/SceneTwo.js';
import SceneThree from './scenes/SceneThree.js';

const config = {};
config.width = 800;
config.height = 600;
config.parent = 'app';
config.type = Phaser.CANVAS;
config.backgroundColor = '#392542';
config.scene = [SceneOne, SceneTwo, SceneThree];

new Phaser.Game(config);