class Particles{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body =Bodies.circle(x, y, radius/2,options);
        this.radius= radius;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("red");
        ellipse( 0, 0, this.radius, this.radius);
        pop();
       if(frameCount%60===0){
         particles.push(new particles(random(width/2+10,width/2-10),20/2))
       }
       for(var i=0; i< particles.length;i=i++){
           particles[i].display();
       }
      }
}