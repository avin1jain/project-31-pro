class Division{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'restitution':0.8, 'friction':0.3, 'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display() {
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER); 
        for(var i=0; i<=width; i=i+80){
        Division.push(new Division(i,550,10,300))       

        }
        for(var i=0; i< division.length;i=i++){
            division[i].display();
        }
        rect(0,0, this.width, this.height);
        pop();
        
    }
}