var planeImg, plane
var background, backgroundImg
var bullet, bulletGroup
var gameState="play"
var end
var score
var restart, restartImg
var gameover, gameoverImg

function preload(){
planeImg = loadImage ("image.png")
backgroundImg = loadImage("seascape-backdrop.jpg")
gameoverImg = loadImage("game over.jpg")
restartImg = loadImage ("images.jpg")
}

function setup() {
 createCanvas(800,800);
 background = createSprite (800,800)
 background.addImage ("background", backgroundImg)
 plane = createSprite(400,400)
 plane.addImage("plane", planeImg)

 bulletGroup=new Group();
 score=0;
}

function draw() {
 text ("score"+score, 500,50)
 if (gameState === "play"){
    if (plane.isTouching(bulletGroup)){
       var gameState = end
    }
    plane.velocityX=5
    if (keyDown(UP_ARROW)){
        plane.velocityY=plane.velocityY-2
    }
    if (keyDown(DOWN_ARROW)){
        plane.velocityY=plane.velocityY+2
    }
    background.velocityX=5
    if (background < 0){
        background.x=background.width/2
    }
    if (bullet.x > 800){
        score=score+1;
    }
    spawnBullets();
 }
 if (gameState === end){
    plane.velocityX=0
    ground.velocityX=0
    bulletGroup.setLifeTimeEach=(-1);
    gameover = createSprite(400,400);
    gameover.addImage("gameover", gameoverImg);
    restart = createSprite(400,450);
    restart.addImage("restart", restartImg)
 }
 drawSprites();
}

function spawnBullets(){
    if (frameCount % 50 === 0){
        var bullet = createSprite (200,200,50,50);
        bullet.velocityX=5
        bullet.lifeTime=300;
        bulletGroup.add(bullet);
    }
}