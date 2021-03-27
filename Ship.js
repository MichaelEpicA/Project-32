class Ship {
    constructor(x,y,r) {
        var options = {
            isStatic:true
        }
        this.image = loadImage("ship.png");
        this.body = Bodies.circle(x,y,120,options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    } 
    display() {
        var pos = this.body.position;
        push(); 
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}