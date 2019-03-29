
const config = {};
config.width = 320;
config.height = 200;
config.parent = 'app';
config.type = Phaser.AUTO
config.scene = {
    preload,
    create,
    update
};

let game = new Phaser.Game(config);

function preload() {
    console.log('Soy preload');
}
function create() {
    console.log('Soy create');

}
function update(delta) {
    // console.log(delta);
}