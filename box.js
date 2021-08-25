class Box
  {
    constructor(x,y,width,height)
    {
      this.x = x;
      this.y = y;
      this.w = width;
      this.h = height;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    //write function to set the width of the box
    changewidth(width){
      this.w = width
    }

  }

  
  
