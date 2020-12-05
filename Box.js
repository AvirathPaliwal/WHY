class Box{
 constructor(x,y,width,height){
   var position ={
       isStatic:false
   }
   
    this.body=Bodies.rectangle(x,y,width,height,position)
    this.visibility = 255
    this.w=width
    this.h=height
    World.add(world,this.body)
 }
  display(){
    var pos =this.body.position
    rectMode(CENTER)
    if(this.body.speed <3){
    } 
      else{
          World.remove(world,this.visibility) 
         
     push()
         this.visibility = this.visibility -2;
         tint(255,this.visibility)  
         translate(pos.x, pos.y);
         rotate(this.body.angle);
         rect(0,0,this.w,this.h)
         pop()
        
        
      
  }
  }
}