const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var torre
var canonbase
var cannonBall
var angulo
var matriz = []
var barcos = []
var Barco
var chao
function preload() {
  fundoImg = loadImage ("assets/background.gif");
  torreImg = loadImage ("assets/tower.png");
}
function setup() {
  canvas = createCanvas(1920,937);
  engine = Engine.create();
  world = engine.world;
  var config ={
  isStatic:true
  }
  chao = Bodies.rectangle (950,920,4000,1,config);
  World.add (world,chao);
  torre = Bodies.rectangle (250,600,400,300,config);
  World.add (world,torre);
  angleMode(DEGREES)
  angulo = 15
  canonbase = new canhao (320,270,260,200,angulo);
}

function draw() {
  background(fundoImg);
  Engine.update(engine);
  mostrarBarcos()
  
   
  
  canonbase.display();
  push()
  imageMode (CENTER)
  
  image (torreImg,torre.position.x,torre.position.y,300,550)
  pop()
  
  for (var indice=0;indice<matriz.length;indice++){
    mostrarBolas(matriz[indice],indice);
     colisao(indice);
  }
} 
function keyReleased(){
  if (keyCode==32){
    cannonBall = new cannonball (330,270);
    matriz.push(cannonBall)
    matriz[matriz.length-1].atirar()
}
}
function mostrarBolas(cannonBall,indice){
  if (cannonBall){
    cannonBall.display()
  }
}
function mostrarBarcos (){
  if (barcos.length >0){
    if (barcos[barcos.length-1].boat.position.x<1300)
    Barco = new barco (2370,910,360,300);
    barcos.push(Barco); 
    for (var indice=0;indice<barcos.length;indice++){
    if (barcos[indice]){
     barcos[indice].display();
     Matter.Body.setVelocity(barcos[indice].boat,{x:-1.5,y:0}) 
    }
  }
} else {Barco = new barco (2370,910,360,300);
   barcos.push(Barco);
 }
}
function colisao (i){
   for (var index=0;index<barcos.length;index++){
     if (matriz[i]!==undefined && barcos[index]!==undefined){
       var colidao = Matter.SAT.collides(matriz[i].bola,barcos[index].boat);
         if (colidao.collided){
           barcos[index].remove(index)
           World.remove(world,matriz[i].bola);
           delete matriz[i]
          }
      }
  } 
}