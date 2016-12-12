//PLAYER MOVEMENT 

var player = $("#player");

var playerX = Math.floor(Math.random() * 500);

var playerY = Math.floor(Math.random() * 500);

player.css("left", parseInt(playerX));

player.css("top", playerY);

$(document).keydown(function(keyPress) {
  if (keyPress.keyCode == 68) {
    player.css("left", playerX + 10)
    playerX = playerX + 10
  }
  if (keyPress.keyCode == 83) {
    player.css("left", playerX - 10);
    playerX = playerX - 10;
  }
  if (keyPress.keyCode == 87) {
    player.css("top", playerX - 10);
    playerY = playerY - 10;
  }
  if (keyPress.keyCode == 83) {
    player.css("top",playerX + 10);
    playerY = (playerY + 10);
  }
})