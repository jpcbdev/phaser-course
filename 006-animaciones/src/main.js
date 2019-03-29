const config = {
    width: 600,
    height: 500,
    parent: 'app',
    pixelArt: true,
    scene: {
        preload,
        create
    }
};

const game = new Phaser.Game(config);

function preload() {
    console.log('Preload');
    this.load.spritesheet('evil', './assets/evil.png', {
        frameWidth: 16,
        frameHeight: 25,
    });
}

function create() {
    console.log('Create');
    this.add.sprite(config.width / 2, config.height / 2, 'evil_tomato', 0);
}

