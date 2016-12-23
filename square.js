//SPRITE FOR PLAYER CANVAS

var food = document.getElementById("food");

var ctx = food.getContext("2d");

var playerX = Math.floor(Math.random() * 950);
var playerY = Math.floor(Math.random() * 950);

function Sprite(x,y,w,h,color){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.color=color ? color : "#000";
}
Sprite.prototype.drawMe = function (ctx,dx,dy){
  ctx.fillStyle = this.color;
  dx= dx ? dx : 0;
  dy= dy ? dy : 0;
  ctx.beginPath();
  ctx.moveTo(this.x,this.y);
  ctx.lineTo(this.x, this.y + this.h);
  ctx.lineTo(this.x + this.w, this.y + this.h);
  ctx.lineTo(this.x + this.w, this.y);
  ctx.lineTo(this.x,this.y)
  ctx.lineWidth = 5
  ctx.stroke();
  ctx.fillRect(this.x+dx,this.y+dy,this.w,this.h);
}

//SPRITE FOR FOOD CANVAS

var foof = document.getElementById("food2");

var ctx2 = foof.getContext("2d");

var playerX = Math.floor(Math.random() * 800);
var playerY = Math.floor(Math.random() * 800);

function Edible(x,y,w,h,color){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.color=color ? color : "#000";
}
Edible.prototype.drawMe = function (ctx,dx,dy){
  ctx2.fillStyle = this.color;
  dx= dx ? dx : 0;
  dy= dy ? dy : 0;
  ctx2.beginPath();
  ctx2.moveTo(this.x,this.y);
  ctx2.lineTo(this.x, this.y + this.h);
  ctx2.lineTo(this.x + this.w, this.y + this.h);
  ctx2.lineTo(this.x + this.w, this.y);
  ctx2.lineTo(this.x,this.y)
  ctx2.lineWidth = 5
  ctx2.stroke();
  ctx2.fillRect(this.x+dx,this.y+dy,this.w,this.h);
}

//PLAYER MOVEMENT 

var player = new Sprite(playerX,playerY,50,50,"#FF0000")
player.drawMe(ctx,0,0)

$(document).keydown(function(pressed) {
  if (pressed.keyCode == 68) {
    playerX = playerX + 5
    ctx.clearRect(0, 0, 800, 800)
    var player = new Sprite(playerX,playerY,50,50,"#FF0000")
    player.drawMe(ctx,0,0)
  }
  if (pressed.keyCode == 87) {
    playerY = playerY - 5
    ctx.clearRect(0, 0, 800, 800)
    var player = new Sprite(playerX,playerY,50,50,"#FF0000")
    player.drawMe(ctx,0,0)
  }
  if (pressed.keyCode == 65) {
    playerX = playerX - 5
    ctx.clearRect(0, 0, 800, 800)
    var player = new Sprite(playerX,playerY,50,50,"#FF0000")
    player.drawMe(ctx,0,0)
  }
  if (pressed.keyCode == 83) {
    playerY = playerY + 5
    ctx.clearRect(0, 0, 800, 800)
    var player = new Sprite(playerX,playerY,50,50,"#FF0000")
    player.drawMe(ctx,0,0)
  }
})

//FOOD



setInterval(function() {
  if (foodCount < 21) {
    var f1 = new Edible(Math.floor(Math.random() * 990), Math.floor(Math.random() * 990), 10,10, "#00FF00");
    f1.drawMe(ctx2,0,0);
    foodTick();
  }
}, 5000);

var foodCount = 0

function foodTick() {
  var foodCount = foodCount + 1
}