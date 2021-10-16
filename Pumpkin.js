class Pumpkin extends BaseClass{
    constructor(x, y){
        super(x, y, 70, 70);
        this.sling3 = loadImage("sprites/sling3.png")
        this.image = loadImage("./sprites/pumpkin.png");
    }
    display(state){
        if(state === "drag"){  
        image(this.sling3,this.body.position.x-40,this.body.position.y,100)
    }
        super.display()
       
    }
}
