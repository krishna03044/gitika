class Slingshot {
    constructor(pointA, bodyB) {
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        

        Composite.add(world, this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }

    display() {
        if(this.sling.bodyB){
            var pointA = this.sling.pointA;
            var pointB = this.sling.bodyB.position;
            strokeWeight(5);
            stroke("green")
            line(pointA.x +30, pointA.y+45, pointB.x+30, pointB.y);
            line(pointA.x -30, pointA.y+45, pointB.x-30, pointB.y);
           
        }
      image(this.sling1,200,190)
      image(this.sling2,170,190)

    }
    attach(body){
        this.sling.bodyB = body;
    }
}
