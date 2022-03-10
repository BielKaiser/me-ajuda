class barco{
    constructor (x,y,w,h,matrizNavio){
      this.animation = matrizNavio
      this.speed = 0.05
      this.w = w
      this.h = h
      this.boat = Bodies.rectangle(x,y,w,h)
      this.Image = loadImage ("assets/boat.png");
      World.add (world,this.boat);
    } 
    remove(indice){
       this.animation = matrizQuebrada
       this.w = 600
       this.h = 600
       setTimeout(()=> {
       Matter.World.remove(world,this.boat);
       delete barcos[indice]},1000);
       } 
     display(){
       var troca = floor(this.speed%this.animation.length);
       push()
       translate (this.boat.position.x,this.boat.position.y);
       rotate (this.boat.angle);
       imageMode (CENTER)
       image(this.animation[troca],0,0,this.w,this.h);
       pop()
    }
     animate (){
      this.speed += 0.05

     }    
}
