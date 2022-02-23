class barco{
    constructor (x,y,w,h){
      this.w = w
      this.h = h
      this.boat = Bodies.rectangle(x,y,w,h)
      this.Image = loadImage ("assets/boat.png");
      World.add (world,this.boat);
    }
     display(){
       push()
       translate (this.boat.position.x,this.boat.position.y);
       rotate (this.boat.angle);
       imageMode (CENTER)
       image (this.Image,0,0,this.w,this.h);
       pop()
    }
     remove(indice){
       setTimeout(()=> {
       World.remove(world,barcos[indice].boat);
       delete barcos[indice]},1000)
       }   
}
