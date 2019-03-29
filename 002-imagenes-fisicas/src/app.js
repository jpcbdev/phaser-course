
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

    // Instanciamos el jugador dentro de una variable
    // this.player = this.add.image(config.width / 2, config.height / 2, "player");

    // Instanciamos el jugador dentro de una variable pero usando fisicas
    this.player = this.physics.add.image(config.width / 2, config.height / 2, "player");

    // Escala el elemento player
    this.player.setScale(0.3);

    // Invierte la posicion vertical del player
    this.player.flipX = true;

    // Permite cambiar el origen del elemento player
    // this.player.setOrigin(0,0);

    // Crea una colision del mundo con el elemento player
    this.player.setCollideWorldBounds(true);

    // Crea un rebote para las coliciones del elemento player
    this.player.setBounce(0.2);

    // Crea una velocidad sumatoria del elemento player en  el eje especificado
    // this.player.setAcceleration(10, 0);

    // Crea una velocidad fija del elemento player
    this.player.setVelocity(90, 0);

    // Muestra las posibles propiedades del elemento player
    console.log(this.player);


}
function update(delta) {
    // Usa el tiempo delta para aumentar el elemento player y hacerlo rotar
    // this.player.angle++;

    // Permite desplazar el elemento player hacia el eje x
    // this.player.x++;
}