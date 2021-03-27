    class Ground {
        constructor(x,y,l,w) {
            var options = {
                isStatic : true
            }
            this.body = Bodies.rectangle(x,y,l,w,options);
            this.x = x;
            this.y = y;
            this.l = l;
            this.w = w;
            World.add(world,this.body);
        } 
        display() {
          push();
          translate(this.body.position.x,this.body.position.y);
          rectMode(CENTER);
          rect(0,0,this.l,this.w);
          fill("red");
          pop();
        }
    }