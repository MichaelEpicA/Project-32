class Player {
    constructor(x,y,r) {
        this.image = loadImage("idle.png");
        this.animation = loadAnimation("walkcolor0001.png","walkcolor0002.png","walkcolor0003.png","walkcolor0004.png","walkcolor0005.png","walkcolor0006.png","walkcolor0007.png","walkcolor0008.png","walkcolor0009.png","walkcolor0010.png","walkcolor0011.png","walkcolor0012.png");
        this.body = Bodies.circle(x,y,30);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    } 
    display() {
        var pos = this.body.position;
        push();
        if (keyDown("w")) {
            Matter.Body.setVelocity(this.body,{x:0,y:-5});
        }
        if (keyDown("a")) {
            Matter.Body.setVelocity(this.body,{x:-2,y:0});
        }
        if(keyDown("d")) {
            Matter.Body.setVelocity(this.body,{x:2,y:0});
        }
        
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}