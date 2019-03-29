const config = {};
config.width = 800;
config.height = 600;
config.parent = 'app';
config.type = Phaser.CANVAS;
config.backgroundColor = '#392542';
config.scene = [SceneOne, SceneTwo, SceneThree];

new Phaser.Game(config);