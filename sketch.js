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
var barcoQuebrado
var barcoQuebradojson
var navio
var naviojson
var waterSplash 
var waterSplashjson
var matrizQuebrada = []
var matrizNavio = []
var matrizSplash = []
var frames1
var frames2
var frames3
var agua,explosao,fundo,gameover
function preload() {
  fundoImg = loadImage ("assets/background.gif");
  torreImg = loadImage ("assets/tower.png");
  barcoQuebradojson = loadJSON ("boat/brokenBoat.json");
  barcoQuebrado = loadImage ("boat/brokenBoat.png");
  naviojson = loadJSON ("boat/boat.json");
  navio = loadImage ("boat/boat.png");
  waterSplashjson = loadJSON ("waterSplash/waterSplash.json");
  waterSplash = loadImage ("waterSplash/waterSplash.png");
  agua = loadSound ("assets/agua.mp3");
  explosao = loadSound ("assets/explosao.mp3");
  fundo = loadSound ("assets/fundo.mp3");
  gameover = loadSound ("assets/gameover.mp3");
}

function setup() {
  canvas = createCanvas(1920,937);
  engine = Engine.create();
  world = engine.world;
  var config ={
  isStatic:true
  }
  chao = Bodies.rectangle (950,920,4000,-1,config);
  World.add (world,chao);
  torre = Bodies.rectangle (250,600,400,300,config);
  World.add (world,torre);
  angleMode(DEGREES)
  angulo = 15
  canonbase = new canhao (320,270,260,200,angulo);
  frames1 = barcoQuebradojson.frames
  frames2 = naviojson.frames
  frames3 = waterSplashjson.frames
   for (var i = 0;i <frames1.length;i++){
    var pos = frames1 [i].position
    var image = barcoQuebrado.get (pos.x,pos.y,pos.w,pos.h);
    matrizQuebrada.push(image);
  }
  for (var i = 0;i <frames2.length;i++){
    var pos = frames2 [i].position
    var image = navio.get (pos.x,pos.y,pos.w,pos.h);
    matrizNavio.push(image);
  } 
  for (var i = 0;i <frames3.length;i++){
    var pos = frames3 [i].position
    var image = waterSplash.get (pos.x,pos.y,pos.w,pos.h);
    matrizSplash.push(image);
  } 
}

function draw() {
  background(fundoImg);
  
  if (!fundo.isPlaying()){
    fundo.play()
    fundo.setVolume(0.1)
  }
  mostrarBarcos()
  Engine.update(engine);
   
  
  canonbase.display();
  push()
  imageMode (CENTER)
  
  image (torreImg,torre.position.x,torre.position.y,300,550)
  pop()
  
  for (var i=0;i<matriz.length;i++){
    mostrarBolas(matriz[i],i);
     colisao(i);
  }
} 
function keyReleased(){
  if (keyCode==32){
    cannonBall = new cannonball (330,270);
    matriz.push(cannonBall)
    matriz[matriz.length-1].atirar()
    explosao.play()
    explosao.setVolume (0.1)
  }
}
function mostrarBolas(cannonBall,indice){
  if (cannonBall){
    cannonBall.animate ();
    cannonBall.display();
    if (cannonBall.bola.position.y>=875){
       
      cannonBall.remove(indice)
      agua.play()
      agua.setVolume (0.1)
    }
  }
}
function mostrarBarcos (){
  if (barcos.length > 0) {
    if (
      barcos[barcos.length - 1] === undefined ||
      barcos[barcos.length - 1].boat.position.x < width - 600
    ) {
      var Barco = new barco(
        width,
        height - 100,
        275,
        275,matrizNavio
        //,
        //position,
        //boatAnimation
      );

      barcos.push(Barco);
    
    
    }

    for (var i = 0; i < barcos.length; i++) {
     
        if (barcos[i]) {
        Matter.Body.setVelocity(barcos[i].boat, {
          x: -0.9,
          y: 0
        });

        barcos[i].display();
        barcos[i].animate();
    var collision = Matter.SAT.collides(this.torre,barcos[i].boat); 
     if (collision.collided){ 
      acabou()
      if (!gameover.isPlaying()){  
      gameover.play()
     gameover.setVolume(0.3)
    }
  }
  }
    }
  } else {
    var Barco = new barco(width, height - 18, 275, 275, matrizNavio)//, //-60, boatAnimation);
    barcos.push(Barco);
  }
}




function colisao(index) {
  for (var i = 0; i < barcos.length; i++) {
    if (matriz[index] !== undefined && barcos[i] !== undefined) {
      var collision = Matter.SAT.collides(matriz[index].bola, barcos[i].boat);

      if (collision.collided) {
         barcos[i].remove(i);
        

        Matter.World.remove(world, matriz[index].bola);
        delete matriz[index];
      }
    }
  }
}
function acabou (){
  swal({
    title:"VOCE FOI INVADIDO",
    text:"vai embora",
    imageUrl:"https://e7.pngegg.com/pngimages/991/68/png-clipart-club-penguin-captain-hook-piracy-hook-miscellaneous-image-file-formats.png",
    confirmButtonText:"JOGAR NOVAMENTE"
  },
  function (isConfirm){
    if (isConfirm){
      location.reload()
    }
  })
}