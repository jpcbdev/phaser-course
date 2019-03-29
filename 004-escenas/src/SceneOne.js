class SceneOne extends Phaser.Scene {
    constructor() {
        super({ key: "SceneOne" });
    }

    preload() {

    }
    create() {

        // Agregamos graficos a la escena
        let graphics = this.add.graphics();

        // Rellenamos el cuadrado
        graphics.fillStyle('0xff300', 1);

        // Creamos 2 rectas
        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        // Agregamos un texto
        this.add.text(120, 100, "1", { font: "96px Noto", fill: "#000" });

        // Iniciamos una escena desde la escena principal esto desaparece la escena actual
        // this.scene.start("SceneThree");

        // Manipular las escenas
        this.scene.bringToTop("SceneTwo");


    }
    update() {

    }

}