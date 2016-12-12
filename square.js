//PLAYER MOVEMENT 

var player = $("#player");

var playerX = Math.floor(Math.random() * 300);

var playerY = Math.floor(Math.random() * 300);

player.css("left", parseInt(playerX));

player.css("bottom", playerY);

$(document).keydown(function(keyPress) {
  if (keyPress.keyCode == 68) {
    player.css("left", playerX + 5)
    playerX = playerX + 5
  }
})