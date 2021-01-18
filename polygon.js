class Polygon
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            friction:1.0,
            density:1.0
        }
            this.x=x;
            this.y=y;
            this.r=r;
            this.body=Bodies.circle(this.x,this.y,this.r/2,options);
            this.image=loadImage("polygon.png");
            World.add(world, this.body);
    
    }
    display()
    {
        var paperpos=this.body.position ;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(1);
        fill(255)
        ellipse(0,0,this.r,this.r)
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2)
        pop()

    }

}