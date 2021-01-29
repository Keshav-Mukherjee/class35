class Form {
  constructor(){

  }
  display(){
      var input = createInput("Name")
      var button = createButton("Start")
      input.position(130,100)
      button.position(250,280)

      var title = createElement("h2")
      title.html("Car Racer")
      title.position(250,100)

      button.mousePressed(function (){
          input.hide()
          button.hide()
          var name = input.value()
          //update name in the database 
          playerCount = + 1 
          player.updatePlayerCount(playerCount)
          player.update(name)
      })
  }
}