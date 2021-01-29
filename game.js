class Game {
    constructor(){
      
    }
    getGameState(){
        var locationInfo = dataBase.ref("gameState")
        locationInfo.on("value",function (data){
        gameState =  data.val()
        })
    }

    update(state){
     dataBase.ref("/").update({
         gameState : state
     })

    }

   start(){
    if(gameState === 0){
     form = new Form()
     form.display()

     player = new Player()
     player.getPlayercount()
    }
   }

}