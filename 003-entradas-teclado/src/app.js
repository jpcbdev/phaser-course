
const config = {};
config.width = 320 * 2;
config.height = 200 * 2;
config.parent = 'app';
config.type = Phaser.AUTO
config.scene = {
    preload,
    create,
    update
};
config.physics = {
    // Fisicas por defecto
    default: 'arcade',
    arcade: {
        gravity: {
            y: 500
        }
    }

}

let game = new Phaser.Game(config);

// Cache de phaser para cargar elementos
function preload() {
    this.load.image("player", "./src/assets/player.png");
    console.log('Soy preload');
}
function create() {

    // Instanciamos el jugador dentro de una variable pero usando fisicas
    this.player = this.physics.add.image(config.width / 2, 400, "player");

    // Escala el elemento player
    this.player.setScale(0.3);

    this.player.setCollideWorldBounds(true);

    // Crea un rebote para las coliciones del elemento player
    this.player.setBounce(0.2);

    // 1ra Opcion para crear metodos de entrada
    // this.input.keyboard.on("keydown_RIGHT", () => {
    //     this.player.setVelocity(200, 0);
    // });
    // this.input.keyboard.on("keyup_RIGHT", () => {
    //     this.player.setVelocity(0, 0);
    // });
    // this.input.keyboard.on("keydown_LEFT", () => {
    //     this.player.setVelocity(-200,0);
    // });

    // this.input.keyboard.on("keyup_LEFT", () => {
    //     this.player.setVelocity(0, 0);
    // });

    //2da Opcion
    this.playerInputControl = this.input.keyboard.createCursorKeys();


}
function update(delta) {
    if (this.playerInputControl.right.isDown) {
        this.player.setVelocity(200, 0);
    } else if (this.playerInputControl.left.isDown) {
        this.player.setVelocity(-200, 0);
    } else if (this.playerInputControl.right.isUp) {
        this.player.setVelocity(0, 0);
    }
    else if (this.playerInputControl.left.isUp) {
        this.player.setVelocity(0, 0);
    }
}