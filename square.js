//SPRITE DUDE

var food = document.getElementById("food");

var ctx = food.getContext("2d");

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
  ctx.fillRect(this.x+dx,this.y+dy,this.w,this.h);
}

//PLAYER MOVEMENT 

var player = new Sprite(Math.floor(Math.random() * 800),Math.floor(Math.random() * 800),50,50,"#FF0000")
player.drawMe(ctx,0,0)

//FOOD

