class cannonball{
     constructor(x,y){   
       this.speed = 0.05
       this.r = 40
       this.trajetoria = []
       var config = {
        isStatic:true
      }
      this.bola = Bodies.circle(x,y,this.r,config);
       this.Image = loadImage ("assets/cannonball.png");
       this.animation = [this.Image]
       World.add (world,this.bola);     
      }
    display(){
      var troca = floor(this.speed % this.animation.length);
      console.log (troca)
      push()
      imageMode (CENTER)
      image (this.animation[troca],0,0,this.r,this.r);  
      pop()  
        if (this.bola.velocity.x>0){
          var trail = [this.bola.position.x,this.bola.position.y]
          this.trajetoria.push(trail);
        }
        for (var i=0; i< this.trajetoria.length; i++ ){
          image (this.Image,this.trajetoria [i][0],this.trajetoria [i][1],15,15);
        }
      }

    remove(indice){
      Matter.Body.setVelocity(this.bola, { x: 0, y: 0 });
      this.animation = matrizSplash
      this.speed = 0.05
      this.r = 40
      setTimeout(() => {
      Matter.World.remove(world,this.bola);
      delete matriz[indice],2000})
     }   
    atirar(){
      var angulo = canonbase.a-28
      angulo=angulo*(3.14/180);
      var velocity = p5.Vector.fromAngle(angulo);
      velocity.mult(0.5);
      Matter.Body.setVelocity(this.bola,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});
      Matter.Body.setStatic(this.bola,false)
      
    }
  
    animate (){
      this.speed += 0.05

     }  
}
  