class Log{

  constructor(x,y,h,a){

  var option={

   restitution:0.3,
   friction:1.7,
   density:1.0

  }

  this.body=Bodies.rectangle(x,y,20,h,option);
  this.h=h;
  Matter.Body.setAngle(this.body,a);
  World.add(world,this.body);

  }

  display(){
 
    push ();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("red");
    fill("purple");
    rect(0,0,20,this.h);
    pop ();

  }

}