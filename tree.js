class Tree {

    constructor(x,y){
    
        this.x=x;
        this.y=y;
        this.width=490;
        this.height=550;
        this.image = loadImage("tree.png");
        
    }
    
    display()
        {
                
                push()
                imageMode(CENTER);
                image(this.image,this.x,this.y,this.width, this.height);
                pop()
                    
        }
    }