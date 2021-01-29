class Player {
    constructor(){
      
    }
    getPlayercount(){
        var locationInfo = dataBase.ref("playerCount")
        locationInfo.on("value",function (data){
        playerCount =  data.val()
        })
    }

    update(name){
        var index =  "player" + playerCount
     dataBase.ref(index).set({
         name : name 
     })

    }

    updatePlayerCount(count){
        dataBase.ref("/").update({
            playerCount : count 
        })
    }
}