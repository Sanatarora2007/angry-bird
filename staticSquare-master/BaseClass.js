class BaseClass{
    constructor(x,y,width,height,angle){
        var option={
            restitution:0.8,
            density:1,
            friction:10
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
       
        this.width=width;
        this.height=height;
        this.image=loadImage("images/base.png")
        World.add(world,this.body);
    }
        display(){
            var angle=this.body.angle
            push();
            translate(this.body.position.x,this.body.position.y)
            rotate(angle)
            fill("brown")
            imageMode(CENTER)
            image(this.image,0,0,this.width,this.height)
            pop();
        }

    
}