class dustBin{

    constructor(x,y,width,height){

        var Options={
            isStatic:true
        }

    this.body=Bodies.rectangle(x,y,width,height,Options);
    this.width=width;
    this.height=height;

    World.add(world,this.body);
    
    }
    display(){
        var place=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(place.x,place.y,this.width,this.height);
    }
}