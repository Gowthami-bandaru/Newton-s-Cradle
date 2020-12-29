class Bob{
  constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution : 0.4,
			friction : 1.0,
			density :0.5
			}
		
		
		this.body=Bodies.circle(x, y, 25, options)
		
		World.add(world, this.body);
		//console.log(this.body);

	}
    display(){
        /*var pos =this.body.position;
      
        fill('cyan');
		ellipse(pos.x, pos.y, 50,50);*/
		var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(230, 230, 0);
        ellipse(0, 0, this.radius,this.radius);
        pop();
     
      }
    }
