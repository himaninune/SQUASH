var ball,ballImage;
var paddle, paddleImage;


function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(40, 200, 20, 20);
  paddle = createSprite(380, 200, 10, 80);
  /* assign the images to the sprites */
  ball.addImage("ball",ballImage);
  paddle.addImage("paddle",paddleImage);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 5;
  
 
  
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  randomVelocity();
  /* Prevent the paddle from going out of the edges */
  paddle.collide(edges[0]);
  paddle.collide(edges[2]);
  
  
  if(keyDown(UP_ARROW)){
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -3;
  }
  
  if(keyDown(DOWN_ARROW)){
    /* what should happen when you press the DOWN Arrow Key */
    paddle.velocityY = 3;
  }
  drawSprites();
   randomVelocity();
  
}

function randomVelocity(){
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  
   var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: ball.velocityY = -1
              break;
      case 2: ball.velocityY = -2
              break;
      case 3: ball.velocityY = -3
              break;
      case 4: ball.velocityY = -4
              break;
      case 5: ball.velocityY = -5
              break;
      case 6: ball.velocityY = -6
              break;
      default: break;
    } 

}
