class canhao{
    constructor(x,y,w,h,a){
      this.x = x  
      this.y = y
      this.w = w
      this.h = h
      this.a = a
      this.Image = loadImage ("assets/cannonBase.png");
      this.Imagecanhao = loadImage ("assets/canon.png");
    }
display (){
  image (this.Image,30,100,400,300);
  push()
  imageMode (CENTER);
  translate (this.x,this.y)
  rotate (this.a)
  image (this.Imagecanhao,0,0,this.w,this.h);
  pop()
    
  
  
  if (keyIsDown(RIGHT_ARROW)){
  if (this.a<45){
    this.a += 1
  }
  }
  if (keyIsDown(LEFT_ARROW)){
  if (this.a>-24){
   this.a -= 1 
  }
}
}  
}