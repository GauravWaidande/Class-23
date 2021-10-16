class Bird{

    constructor(x,y){
 
      var option={
 
             restitution:0.3,
             friction:0.3,
             density:1.0
 
      }
 
     this.body=Bodies.rectangle(x,y,50,50,option);
     World.add(world,this.body);
 
    }
 
    display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY
       push ();
       translate (this.body.position.x,this.body.position.y);
       rotate (this.body.angle);
       rectMode(CENTER);
       strokeWeight(3);
       stroke("red");
       fill("lightblue");   
       rect(0,0,50,50);
       pop (); 
 
    }
 
 }