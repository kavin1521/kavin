class Form { 

    constructor(){
     this.button = createButton("cop");  
     this.button2 = createButton("rober");
     this .title = createElement('h2');
    }

    display(){
      background("white");
      image(bg1img,displayWidth/2,displayHeight/2)
      this.title.html("cop and rober");
      this.title.position(displayWidth/2-30,0)

      this.button.position(displayWidth/2-40,displayHeight/2);
      this.button2.position(displayWidth/2+40,displayHeight/2);
      
    }

}