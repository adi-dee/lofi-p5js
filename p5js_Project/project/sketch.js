//stars 1  
var stars = [];

let ufo;
let satellite;
let dish;
let fly = -1200;
let flyY = 1;
let frontImg
let moveX = 800
let moveY = -2000
let antena 
let desert;

var song;
var amp;


var x = 0;

let fairyLight = 255
let fairyLight2 = 100

let glowlight = 30

let canvas2D

let canvas3

let expand_shrink2

// neon sign
let motel;
let offset = 0.0;


function preload() {
  // Load model with normalise parameter set to true
  frontImg = loadImage('obj/front-img.png', true);
//  motel = loadImage('obj/motel.png');
  ufo = loadModel('obj/ufo.obj', true);
  satellite = loadModel('obj/satellite.obj', true);
  dish = loadModel('obj/dish.obj', true);
  desert = loadModel('obj/desert.obj', true);
  antena = loadModel('obj/antena.stl', true);

  

}


// Gradient
function setup() {

 // image(motel,0,0);
  tint(0, 153, 204); 
//  image(motel,0,0);

  createCanvas( windowWidth, windowHeight, WEBGL);
  canvas2D = createGraphics(windowWidth, windowHeight,P2D);
  canvas3 = createGraphics(windowWidth, windowHeight,P2D);
  canvas3.colorMode(HSB, 360, 100, 100, 100);
  
  grabbed_image = canvas3.get()

  canvas2D.clear();


  //stars 2  

      for (var i = 0; i < 250; i++) {
          stars[i] = new Star();
      }

      song = loadSound('lofi-adi-2.mp3');
      amp = new p5.Amplitude();
  }
  

function draw() {


  // sounds amp for visuals

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);
  
  // Gradient try 2
  
  const m = 500;

  const topR = 255 * noise(frameCount / m);
  const topG = 255 * noise(1000 + frameCount / m);
  const topB = 255 * noise(2000 + frameCount / m);
  const bottomR = 255 * noise(3000 + frameCount / m);
  const bottomG = 255 * noise(4000  + frameCount / m);
  const bottomB = 255 * noise(5000 + frameCount / m);

  const topColor = color(topR, topG, topB);
  const bottomColor = color(bottomR, bottomG, bottomB);

  for(let y = -windowHeight; y < height; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);

    stroke(lineColor);
    line(-windowWidth, y, -400 , windowWidth, y ,-400);
  }
  
  

  
  
      //stars	3
  for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
    

  
  setAttributes('alpha', false) 
  
  ambientLight(25);
  
   let light = 10
    
    light += 0.5

    light += 0.5

let angle = 0;
  
 // pointLight(250, 250, 250, (mouseX - width) / 2, mouseY - height / 2, 100);  

 pointLight(250, 0, 50, light , -20 + light , -100);
 pointLight(250, 0, 50, light , -180 + light , -100);


  //moon 1
  push();

  translate(160, -140, -100);
   lightFalloff(1, 0, 0);
  // ambientMaterial(250);
  rotateX(angle)
    ambientLight(255); // white light
    ambientMaterial(color(topR, topG, topB, 200));
    sphere(80, 100);
  pop();
    
  angle += .06

    //moon 2
    push();
    pointLight(250, 0, 50, -200 , 0  , 0);
    pointLight(250, 0, 50, -200 , 0  , 0);
  
  
    translate(-80, -220, -100);
     lightFalloff(4, 0, 0);
    // ambientMaterial(250);
    rotateX(angle)
      ambientLight(255); // white light
      ambientMaterial(color(topR, topG, topB, 200));
      sphere(40, 100);
    pop();
    // ufo


  push();

 // Scaled to make model fit into canvas

  scale(0.4);

    ambientMaterial(color(topB-50 , 50,topR-50,50));
    translate( moveX, moveY, 0)
    rotateX(x);

    

  model(satellite);
  

  strokeWeight(2); // set the thickness of the outline
  rotateX (100)
  noFill()
  rotateY(90)
  //rotateY (20);
  stroke(176, 176, 176); 
  translate(-45, 5, 75)

  circle(0, 0, 5 + diam/4);

  translate(0, 0, 20)
  circle(0, 0, 10 + diam/3);

  translate(0, 0, 25)

  circle(0, 0, 25 + diam/2);

  x+= 0.01;

   moveX += -1.5;

   if (moveX > windowWidth) {
    moveX = 800;
       }
   
       moveY += 1.5;

       if (moveY > windowHeight) {
        moveY = -2000;
           }

  pop();

  push();
  scale(8);


 // rotateX(-0.06)
  translate( 0, 40, 0)

  directionalLight(250, topR, topG, 600, -200, -1);
  ambientMaterial(color(250 , topG-50,topR-50, 50));

  model(desert);



  pop();


  push();
  scale(4);

  rotateX(140)
 // translate( 120, 50, -70)

 translate( 80, 50, -50)

 //translate( -80, 50, -50)

  model(antena);


  strokeWeight(2); // set the thickness of the outline
  stroke(176, 176, 176); 
  rotateX (90)
  noFill()
  //rotateY (20);

  circle(0, 40, 1 + diam/4);
  translate( 0, 0, 3)

  circle(0, 40, 5 + diam/3);

  translate( 0, 0, 6)

  circle(0, 40, 10 + diam/2);

  pop();

    push();

     scale(0.4); // Scaled to make model fit into canvas
    rotateY ((Math.PI / 2) + random(0.005));
    rotateX ((Math.PI / 2) + random(0.005))
    ambientLight(255); 
    ambientMaterial(color(topB-50 , topG-50,topR-50, 50));

      translate(0, fly,flyY)
    //  translate(p5.Vector.fromAngle(millis() / 1000, 40));

      model(ufo);

    fly += 1.5;

    if (fly > windowWidth) {
      fly = -width - 200;
        }
    
  

    if ( flyY >= 200) {
        expand_shrink = -1;
    } 
    else if ( flyY <= 10) {
    expand_shrink = 1;
    } 
    flyY += (expand_shrink * 0.5);

    pop()




  //canvas2D.drawingContext.filter = 'blur(4px)';
  //canvas2D.ellipse(mouseX,mouseY,100)
  canvas2D.drawingContext.shadowColor = color(255,255,255);
  canvas2D.drawingContext.shadowBlur = glowlight;


  if ( glowlight >= 400) {
    expand_shrink2 = -1;
  } 
  else if ( glowlight <= 0) {
  expand_shrink2 = 1;
  } 
  glowlight += (expand_shrink2 * 0.005);


    fairyLight++

  if(fairyLight > 250){
    fairyLight = 0;
  } 


  fairyLight2++

  if(fairyLight2 > 250){
    fairyLight2 = 0;
  }


  canvas2D.drawingContext.shadowBlur = null;

  image(canvas2D, -720 , 0, windowWidth,windowHeight)

}


//stars 4  

class Star {
	constructor() {
		this.x = random(windowWidth,-windowWidth);  
		this.y = random(windowHeight*0.3, -windowHeight); 
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	draw() {
    fill(255, 255, 255)
		this.t += 0.05;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}

}

//play sound on click

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }

}





