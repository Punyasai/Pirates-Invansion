class Boat{
    constructor(x, y,width,height,boatPos) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
        }
        this.body = Bodies.rectangle(x, y,width,height,options);
        this.width=width;
        this.height=height;
        this.boatPos=boatPos;
        this.image = loadImage("assets/boat.png");
        World.add(world, this.body);
          
      }

      remove(index){
        Matter.World.remove(world,boats[index].body);
        boats.splice(index,1)

      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPos, this.width, this.height);
        pop();
      }
}