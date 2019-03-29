export default class SceneThree extends Phaser.Scene {
    constructor() {
        super({ key: "SceneThree", active: true });
    }

    preload() {

    }
    create() {

        // Agregamos graficos a la escena
        let graphics = this.add.graphics();

        // Rellenamos el cuadrado
        graphics.fillStyle('0xff990231', 1);

        // Creamos 2 rectas
        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(300, 100, 100, 100);

        // Agregamos un texto
        this.add.text(320, 100, "3", { font: "96px Noto", fill: "#fff" });

     

    }
    update() {

    }

}
