
var dataBase;
var position;
var playerCount;
var gameState;
var form ;
var game ;
var player ;


function setup(){
    dataBase = firebase.database()
    
    
    createCanvas(500,500);
    game = new Game()
    game.getGameState()
    game.start()

    
}

function draw(){
    background("white");
    
    
}

