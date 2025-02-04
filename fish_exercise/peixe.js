var config = {
    type: Phaser.AUTO, 
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game (config);

var grandiosoPeixe;

function preload (){
    this.load.image('oceano', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('grandioso', 'assets/peixes/tubarao.png');
    this.load.image('wilson', 'assets/island.png');
    this.load.image('undersea', 'assets/bbottom.png');
    this.load.image('aquatico', 'assets/aquatico.png');
    this.load.image('bubbleGuppies', 'assets/gil.png');
    this.load.image('tintin', 'assets/tintin.png');
}



function create(){
    this.add.image(400,300, 'oceano');
    this.add.image(400,515, 'logo').setScale(0.6);
    this.add.image(100,100, 'wilson').setScale(0.02);
    this.add.image(700,150, 'undersea').setScale(0.8);
    this.add.image(75,450, 'aquatico').setScale(0.4);
    this.add.image(700,450, 'bubbleGuppies').setScale(0.25);
    this.add.image(400,275, 'tintin').setScale(0.4);

    grandiosoPeixe = this.add.image(400,300, 'grandioso');

}

function update(){
    grandiosoPeixe.x = this.input.x;
    grandiosoPeixe.y = this.input.y;

}