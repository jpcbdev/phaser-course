class SceneTwo extends Phaser.Scene {
    constructor() {
        super({ key: "SceneTwo", active: true });
    }

    preload() {

    }
    create() {

        // Agregamos graficos a la escena
        let graphics = this.add.graphics();

        // Rellenamos el cuadrado
        graphics.fillStyle('0xff33999', 1);

        // Creamos 2 rectas
        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(200, 100, 100, 100);

        // Agregamos un texto
        this.add.text(220, 100, "2", { font: "96px Noto", fill: "#fff" })

        // Agregamos la escena desde la clase
        // this.scene.add("SceneThree", new SceneThree);
    }
    update() {

    }

}