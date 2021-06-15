class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.8,
		friction:0.8,
		density:20,
	}
    this.width= width;
    this.height=height;
	this.body=Bodies.rectangle(x, y,this.width,this.height, options)
       
		World.add(world, this.body);
       

	}
	display()
	{
			var pos=this.body.position;		
           var angle =this.body.angle;
			push()
         translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
		
			fill("red");
			
		   rect(0,0,this.width,this.height);
			pop()
	}

}