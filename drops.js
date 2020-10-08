class Drops {
    constructor(x,y){
        var dropOptions = {
            'mass'        : 1,
            'restitution' : 0.2,
            'friction'    : 1
        }

        this.body = Bodies.circle(x,y,20,dropOptions);
        this.x = x;
        this.y = y;

        

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("Blue");
        ellipseMode(CENTER);
        ellipse(0,0,20);
        pop();
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x : random(0,width), y : -10});
        }
    }
}