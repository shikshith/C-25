class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //special property of the bird=should move with the mouse
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //function overiding= having same name function in both child and parent class
    // refers to the display of the parent class
    super.display();
  }
}