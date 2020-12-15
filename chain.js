class Chain{
    constructor(body1, body2){
        var chainOptions={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.05,
            length:10
        }
    this.chain=Constraint.create(chainOptions);
    World.add(world, this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}