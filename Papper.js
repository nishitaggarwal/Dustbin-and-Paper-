class Papper {
    constructor(x, y,angle) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
           'friction':0.1,
          'density':1500.2
      }
      this.body = Bodies.circle(x, y,angle, options);
      this.angle=PI/2
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("White");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  