class Umbrella {
    constructor(x,y){
        var umbrellaOptions = {
            'isStatic' : true
        }

        this.body = Bodies.circle(x,y,250,umbrellaOptions);
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    }

    display()
    {
        fill("blue");
        animation(boyAnimation,this.x,this.y+50);
    }
}