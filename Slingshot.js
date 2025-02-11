class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,175,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8);
            if(pointA.x<210){
                strokeWeight(10);
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25,pointA.y, pointB.x+25, pointB.y);
                image(this.sling3,this.sling.bodyA.position.x-25,pointA.y,15,30);
            }
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x+25,pointA.y, pointB.x-25, pointB.y); 
                image(this.sling3,this.sling.bodyA.position.x+25,pointA.y,15,30); 
            }
        }
    }
    
}