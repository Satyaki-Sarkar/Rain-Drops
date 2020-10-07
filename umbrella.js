class Umbrella {
    constructor(x,y){
        var umbrellaOptions = {
            'isStatic' : true
        }

        this.body = Bodies.circle(x,y,50,umbrellaOptions);
        this.x = x;
        this.y = y;

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x : random(0,width), y : -10});
        }

        World.add(world, this.body);
    }

    display()
    {
        animation(boyAnimation,this.x,this.y);
    }
}