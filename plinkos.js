class Plinkos{
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body =Bodies.circle(x, y, radius/2,options);
        this.radius= radius;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("white");
        for(var i= 40; i <=width; i= i+50){
           plinkos.push(new Plinkos(i,75,20/2)) 
        }
        for(var i=0; i< plinkos.length;i=i++){
            plinkos[i].display();
        }
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}