class Drops {
    constructor(x,y){
        var dropOptions = {
            'isStatic'    : false,
            'restitution' : 0.8,
            'friction'    : 0.1
        }

        this.body = Bodies.circle(x,y,20,dropOptions);
        this.x = x;
        this.y = y;

        // if(this.body.position.y > height){
        //     Matter.Body.setPosition(this.body,{x : random(0,width), y : -10});
        // }

        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.x, this.y);
        rotate(angle);
        fill("Blue");
        ellipseMode(CENTER);
        ellipse(0,0,20);
        pop();
    }
}