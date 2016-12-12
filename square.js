//PLAYER MOVEMENT 

var player = $("#player");

var playerX = Math.floor(Math.random() * 1080);

var playerY = Math.floor(Math.random() * 960);

player.css("left", playerX);

player.css("bottom", playerY);

$(document).keyDown(function(keyPress) {
  if (keyPress.keyCode = 68) {
    player.css("left",)
  }
})