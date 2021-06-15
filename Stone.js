class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.2,
		friction:1.0,
		density:30,
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
		
			fill("black");
			
		   rect(0,0,this.width,this.height);
			pop()
	}

}