//extends tells us that we are creating a child class from the parent class
class Box extends BaseClass{
  constructor(x, y, width, height) {
    // super=transfers all the properties of the parent class to the child class through the parent class constructor
    super(x,y,width,height)
    //special property of the box = should look like a wooden box
    this.image=loadImage("sprites/wood1.png")
  }
};
