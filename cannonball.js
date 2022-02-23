class cannonball{
     constructor(x,y){
       this.x = x   
       this.y = y
       this.r = 30
       var config = {
        isStatic:true
      }
      this.bola = Bodies.circle(x,y,this.r,config);
       this.Image = loadImage ("assets/cannonball.png");
       World.add (world,this.bola);     
      }
    display(){
      push()
      imageMode (CENTER)
      image (this.Image,this.bola.position.x,this.bola.position.y,this.r,this.r);  
      pop()  
  
    }
    remove(indice){
      Matter.World.remove(world,matriz[indice].body);
      delete matriz[indice];
     }   
    atirar(){
      var angulo = canonbase.a-28
      angulo=angulo*(3.14/180);
      var velocity = p5.Vector.fromAngle(angulo);
      velocity.mult(0.5);
      Matter.Body.setVelocity(this.bola,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});
      Matter.Body.setStatic(this.bola,false)
      
    }


}
  