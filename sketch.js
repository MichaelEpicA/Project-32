const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,player,ground,ground2,ship;
var gameState= "play";
function setup() {
  var canvas = createCanvas(1200,400); 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,390,500,50);
  ground2 = new Ground(700,200,200,50)
  player = new Player(200,20,50);
  ship = new Ship(1120,200,200);
  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  ground2.display();
  player.display();
  ship.display();  
  if(Matter.SAT.collides(player.body,ship.body).collided) {
    gameState = "win";
  }
  if(gameState == "win") {
    ground.body.render.visible = false;
    ground2.body.render.visible = false;
    player.image.visible = false;
    ship.image.visible = false;
    text("You won!",200,20)
  }
  drawSprites();
}



 
