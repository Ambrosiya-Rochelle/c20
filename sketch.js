var fixedRect,movingRect
function setup() {

  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = 'green'
  
  movingRect=createSprite(600, 200, 50, 80);
  movingRect.shapeColor = 'green';

  gameObj1=createSprite(600, 200, 50, 80);
  gameObj1.shapeColor = 'pink'
  
  gameObj2=createSprite(600, 200, 50, 80);
  gameObj2.shapeColor = 'pink';
  
}

//true or false --> boolean values
function draw() {
  background(255,255,255);  
  gameObj1.x =World.mouseX;
  gameObj1.y =World.mouseY;

  if(myOwnIsTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }
  else{
    fixedRect.shapeColor = 'green';
    movingRect.shapeColor = 'green';
  }
   if(myOwnIsTouching(gameObj1,gameObj2)){
     gameObj1.shapeColor= 'blue'
     gameObj2.shapeColor= 'blue'
   }
   else{
    gameObj1.shapeColor= 'pink'
    gameObj2.shapeColor= 'pink'
   }
  

  
  drawSprites();
}

//arguments to a function
function myOwnIsTouching(obj1,obj2){
  if(obj1.x-obj2.x < obj1.width/2+obj2.width/2 && 
    obj2.x-obj1.x < obj1.width/2+obj2.width/2 &&
    obj1.y-obj2.y < obj1.height/2+obj2.height/2&&
    obj2.y-obj1.y < obj1.height/2+obj2.height/2){

    return true;

  }
  else{
    return false;
  }
}