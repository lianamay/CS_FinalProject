function Breaks(x,y,z) {
 
  this.x = x;
  this.y = y;
  this.lifeLength = 2;
  
  this.length = z;
  
  this.height = 30;

  this.color = color(0);
  
  this.createBreaks = function () {
  	fill(this.color);
	rect(this.x,this.y,this.length,this.height);
	fill(0);
	text(''+ this.lifeLength, this.x - 5,this.y + this.height/4);


  }
  
} 