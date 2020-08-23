class Bird extends BaseClass{

    constructor(x,y,width,height){

    super(x,y,width,height)
    this.image=loadImage("images/bird.png")

    this.z=[]//empty array

    this.smokeImage=loadImage("images/smoke.png")
    

    }

    display(){

        super.display();

        if(this.body.velocity.x>10 && this.body.position.x>200){

            var position=[this.body.position.x,this.body.position.y];
            this.z.push(position)

        }
      

        for(var i=0;i<this.z.length;i++){


            
            image(this.smokeImage,this.z[i][0],this.z[i][1])
            

        }

        

    }
    

}