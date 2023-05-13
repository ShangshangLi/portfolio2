//fonts;
let nunitoRegular,nunitoBold,nunitoExtraBold;

//colors;
let green='#76BB89';
let yellow='#FFB84E';
let lightYellow='#FFD84E';
let pink = '#FFC1D0';

let magnitudePrevious=0;
let magnitudeDelta;
let flag=0;
let stepCount=0;

let sceneFlag=0;
let sceneNum =0;
let pressValue = 0;

let imgOM,imgBonus, imgUpSign, imgCarrotSign;
let landingPage, coinPage;

// let rabbit1;
let rabbitImg = [];

let beginButton;

function preload(){
  nunitoRegular = loadFont('assets/fonts/Nunito/Nunito-Regular.ttf');
  nunitoBold = loadFont('assets/fonts/Nunito/Nunito-Bold.ttf');
  nunitoExtraBold = loadFont('assets/fonts/Nunito/Nunito-ExtraBold.ttf');
  
  landingPage = loadImage('assets/img/carrotCarrotLanding.png');
  coinPage = loadImage('assets/img/pages/coinSettlementPage.png');
  
  imgOM= loadImage('assets/img/signs/oneMoveSign.png');
  imgBonus = loadImage('assets/img/signs/bonusSign.png');
  imgUpSign = loadImage('assets/img/signs/upSign.png');
  imgCarrotSign = loadImage('assets/img/signs/carrotSign.png');
  
  
  // rabbit1= createImg('assets/rabbit/rabbit-1.png','rabbit static img');
  for (let i = 0; i < 100; i++) {
    rabbitImg[i] = createImg(`assets/img/rabbit/rabbit${i+1}.png`,'rabbit img ' + i);
    rabbitImg[i].hide();
  }
  
  // button = createButton('click me');
  // button.mousePressed(changeBG);
  // button.position(windowWidth/2, windowHeight/2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  checkSensorPermissions();//!!!important for access permission;
  
  beginButton = createButton('START');
  beginButton.style('background-color', 'white');
  beginButton.style('color', yellow);
  beginButton.style('font-size', '5vw');
  beginButton.style('font-family', nunitoRegular);
  beginButton.style('border', 'none');
  beginButton.style('border-radius', '10vw');
  beginButton.style('padding', '5vw');
  beginButton.position(width/2.65,height-height/5);
  beginButton.hide();

  for (let i = 0; i < 100; i++) {
    rabbitImg[i].size(AUTO, windowHeight);
    // rabbitImg[i].center();
  }

}

function draw() {
  background(255);
  
  textSize(25);
  
  switch (sceneNum) {
    case 0:
      //begin page to avoid the checkSensorPermission influence the counting of following scenes;
      s0();
    break;
      
    case 1:
      s1();
      //to make the game restart successfully or the ture booleans will make the first scene jump to the end scene directly.
      // p1d1=false;
      // p1d2=false;
      // p1d3=false;
      // p2d1=false;
      // p2d2=false;
      // p2d3=false;
    break;
    
    case 2:
      s2();
    break;
    
    case 3:
      s3();
    break;
    
    case 4:
      s4();
    break;
    
    case 5:
      s5();
    break;
    
    case 6:
      s6();
    break;
    
    case 7:
      s7();
    break;
    
    case 8:
      s8();
    break;
    
    case 9:
      s9();
    break;
    
    case 10:
      s10();
    break;
    
    case 11:
      s11();
    break;
    
    case 12:
      s12();
    break;
    
    case 13:
      s13();
    break;
    
    case 14:
      s14();
    break;
    
    case 15:
      s15();
    break;
    
    case 16:
      s16();
    break;
    
    case 17:
      s17();
    break;
    
    case 18:
      s18();
    break;
    
    case 19:
      s19();
    break;
    
    case 20:
      s20();
    break;
    
    case 21:
      s21();
    break;
    
    case 22:
      s22();
    break;
    
    case 23:
      s23();
    break;
    
    case 24:
      s24();
    break;
    
    case 25:
      s25();
    break;
    
    case 26:
      s26();
    break;
    
    case 27:
      s27();
    break;
    
    case 28:
      s28();
    break;
    
    case 29:
      s29();
    break;
    
    case 30:
      s30();
    break;
    
    case 31:
      s31();
    break;
    
    case 32:
      s32();
    break;
    
    case 33:
      s33();
    break;
    
    case 34:
      s34();
    break;
    
    case 35:
      s35();
    break;
    
    case 36:
      s36();
    break;
    
    case 37:
      s37();
    break;
    
    case 38:
      s38();
    break;
    
    case 39:
      s39();
    break;
    
    case 40:
      s40();
    break;
    
    case 41:
      s41();
    break;
    
    case 42:
      s42();
    break;
    
    case 43:
      s43();
    break;
    
    case 44:
      s44();
    break;
    
    case 45:
      s45();
    break;
    
    case 46:
      s46();
    break;
    
    case 47:
      s47();
    break;
    
    case 48:
      s48();
    break;
    
    case 49:
      s49();
    break;
    
    case 50:
      s50();
    break;
    
    case 51:
      s51();
    break;
    
    case 52:
      s52();
    break;
    
    case 53:
      s53();
    break;
    
    case 54:
      s54();
    break;
    
    case 55:
      s55();
    break;
    
    case 56:
      s56();
    break;
    
    case 57:
      s57();
    break;
    
    case 58:
      s58();
    break;
    
    case 59:
      s59();
    break;
    
    case 60:
      s60();
    break;
  }

   // text("scene num: "+sceneNum,windowWidth/2,30);
  if(sceneFlag==1){
    nextScene();
    sceneFlag=0;
  }
}

function nextScene(){
  sceneNum++;
}

function touchStarted() {
  if((sceneNum>0)&&(sceneNum<4))
  {
    pressValue = pressValue +1;
  }
  else if((sceneNum>5)&&(sceneNum<9)){
    pressValue = pressValue +1;
  }
  else if((sceneNum>33)&&(sceneNum<36)){
    pressValue = pressValue +1;
  }
  else if((sceneNum>53)&&(sceneNum<57)){
    pressValue = pressValue +1;
  }
}

function basicMovementDetection(){
  image(imgOM,windowWidth/2, windowHeight/6,width/2.5, width/2.5);
  image(imgUpSign,windowWidth-windowWidth/6,windowHeight-windowHeight/5.5,width/12,width/12);
}

function intenseMovementDetection(){
  let fontSize = windowWidth/18;
  let detectionText = "Intense Movement"
  let bbox = nunitoBold.textBounds(detectionText, width/2, height/10,fontSize);
  fill(pink);
  noStroke();
  rect(width/5, bbox.y-fontSize, width-width/2.5, bbox.h+fontSize*2,fontSize*2);
  fill(255);
  textFont(nunitoBold);
  textSize(fontSize);
  text(detectionText,width/2,height/10);
  
  image(imgBonus,windowWidth/2, windowHeight/6, width/2.5, width/2.5 );
  image(imgUpSign,windowWidth-windowWidth/8,windowHeight-windowHeight/5,width/12 , width/12 );
  
}

function s0(){
  // background(green);
  image(landingPage,0, 0,width,landingPage.height*width/landingPage.width);//to fit width;
  beginButton.show();
  beginButton.mousePressed(nextScene);
}

function s1(){
  beginButton.hide();
  
  rabbitImg[sceneNum-1].show();
  rabbitImg[sceneNum-1].center();
  
  let fontSize = width/23;
  let welcomeText = "Welcome to CarrotCarrot Garden!";
  let bbox = nunitoRegular.textBounds(welcomeText, width/2, height-height/5, fontSize);
  fill(green);
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*2,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(welcomeText,width/7,height-height/5,width-width/5);
  
  if(pressValue==2){
    sceneFlag=1;
  }
}

function s2(){
  rabbitImg[sceneNum-2].hide();
  rabbitImg[sceneNum-1].show();
  rabbitImg[sceneNum-1].center();
  
  let fontSize = width/23;
  let welcomeText= "With it few savings, RabbitRabbit decides to return to its hometown to operating a garden and become self-sufficient.";
  let bbox = nunitoRegular.textBounds(welcomeText, width/2, height-height/5, fontSize);
  fill(green);
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*5.5,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(welcomeText,width/7,height-height/5,width-width/5);
  
  if(pressValue==4){
    sceneFlag=1;
  }
}

function s3(){
  rabbitImg[sceneNum-2].hide();
  rabbitImg[sceneNum-1].show();
  rabbitImg[sceneNum-1].center();
  
  let fontSize = width/23;
  let welcomeText = "But there's nothing on the land yet. Can you help RabbitRabbit build its garden?";
  let bbox = nunitoRegular.textBounds(welcomeText, width/2, height-height/5, fontSize);
  fill('#76BB89');
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*4.5,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(welcomeText,width/7,height-height/5,width-width/4.6);
  
  if(pressValue==6){
    sceneFlag=1;
  }
}

//walking step count on
function s4(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding-3 ,rabbitImg[2];
  rabbitImg[2].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);

  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
//         image(imgOM,windowWidth/2, windowHeight/6,width/2.5, width/2.5);
//         image(imgBonus,windowWidth/2, windowHeight/6, width/2.5, width/2.5 );
//         image(imgUpSign,windowWidth-windowWidth/6,windowHeight-windowHeight/5.5,width/12 , width/12 );
//         image(imgUpSign,windowWidth-windowWidth/8,windowHeight-windowHeight/5,width/12 , width/12 );
  
//         let fontSize = windowWidth/18;
//         let detectionText = "Intense Movement"
//         let bbox = nunitoBold.textBounds(detectionText, width/2, height/10,fontSize);
//         fill(pink);
//         noStroke();
//         rect(width/5, bbox.y-fontSize, width-width/2.5, bbox.h+fontSize*2,fontSize*2);
//         fill(255);
//         textFont(nunitoBold);
//         textSize(fontSize);
//         text(detectionText,width/2,height/10);
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-4, rabbitImg[3];
      rabbitImg[3].show();
      rabbitImg[3].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-5, rabbitImg[4];
    rabbitImg[3].hide();
    rabbitImg[4].show();
    rabbitImg[4].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s5(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  
  //showing rabbit-6, rabbitImg[5];
  // rabbitImg[sceneNum-1].hide();
  // rabbitImg[sceneNum].show();
  // rabbitImg[sceneNum].center();
  rabbitImg[4].hide();
  // rabbitImg[5].show();
  // rabbitImg[5].center();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      rabbitImg[5].show();
      rabbitImg[5].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-7, rabbitImg[6];
    // rabbitImg[sceneNum].hide();
    // rabbitImg[sceneNum+1].show();
    // rabbitImg[sceneNum+1].center();
    rabbitImg[5].hide();
    rabbitImg[6].show();
    rabbitImg[6].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

//dialogue: getting hoe!
function s6(){
  textAlign(LEFT);
  // fill(yellow);
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  
  //showing rabbit-8, rabbitImg[7];
  rabbitImg[6].hide();
  rabbitImg[7].show();
  rabbitImg[7].center();
  
  
  let fontSize = width/23;
  let welcomeText = "Great! RabbitRabbit find a hoe with your help!";
  let bbox = nunitoRegular.textBounds(welcomeText, width/2, height-height/5, fontSize);
  fill('#76BB89');
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*3.5,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(welcomeText,width/7,height-height/5,width-width/4.5);
  
  if(pressValue==8){
    // nextScene();
    sceneFlag=1;
  }
}

function s7(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  
  //showing rabbit-9, rabbitImg[8];
  rabbitImg[7].hide();
  rabbitImg[8].show();
  rabbitImg[8].center();
  
  let fontSize = width/23;
  let welcomeText = "RabbitRabbit is ready for planting ~";
  let bbox = nunitoRegular.textBounds(welcomeText, width/2, height-height/5, fontSize);
  fill('#76BB89');
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*2,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(welcomeText,width/7,height-height/5,width-width/5);
  
  if(pressValue==10){
       // nextScene();
    sceneFlag=1;
  }
}

function s8(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  
  //showing rabbit-10, rabbitImg[9];
  rabbitImg[8].hide();
  rabbitImg[9].show();
  rabbitImg[9].center();
  
  let fontSize = width/23;
  let welcomeText = "Once you begin move, RabbitRabbit also begins its work";
  let bbox = nunitoRegular.textBounds(welcomeText, width/2, height-height/5, fontSize);
  fill('#76BB89');
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*3.5,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(welcomeText,width/7,height-height/5,width-width/5);
  
  if(pressValue==12){
       // nextScene();
    sceneFlag=1;
  }
}

//begin walking step counting again
function s9(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding rabbit-10, rabbitImg[9];
  rabbitImg[9].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-11, rabbitImg[10];
      rabbitImg[10].show();
      rabbitImg[10].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-12, rabbitImg[11];
    rabbitImg[10].hide();
    rabbitImg[11].show();
    rabbitImg[11].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s10(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding rabbit-12, rabbitImg[11];
  rabbitImg[11].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-13, rabbitImg[12];
      rabbitImg[12].show();
      rabbitImg[12].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-14, rabbitImg[13];
    rabbitImg[12].hide();
    rabbitImg[13].show();
    rabbitImg[13].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s11(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding rabbit-14, rabbitImg[13];
  rabbitImg[13].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-15, rabbitImg[14];
      rabbitImg[14].show();
      rabbitImg[14].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-16, rabbitImg[15];
    rabbitImg[14].hide();
    rabbitImg[15].show();
    rabbitImg[15].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s12(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding rabbit-16, rabbitImg[15];
  rabbitImg[15].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-17, rabbitImg[16];
      rabbitImg[16].show();
      rabbitImg[16].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-18, rabbitImg[17];
    rabbitImg[16].hide();
    rabbitImg[17].show();
    rabbitImg[17].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s13(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding rabbit-18, rabbitImg[17];
  rabbitImg[17].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-19, rabbitImg[18];
      rabbitImg[18].show();
      rabbitImg[18].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-20, rabbitImg[19];
    rabbitImg[18].hide();
    rabbitImg[19].show();
    rabbitImg[19].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s14(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding rabbit-20, rabbitImg[19];
  rabbitImg[19].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-21, rabbitImg[20];
      rabbitImg[20].show();
      rabbitImg[20].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-22, rabbitImg[21];
    rabbitImg[20].hide();
    rabbitImg[21].show();
    rabbitImg[21].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s15(){
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  // text("flag: "+flag,windowWidth/2,60);
  
  //hiding rabbit-22, rabbitImg[21];
  rabbitImg[21].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-23, rabbitImg[22];
      rabbitImg[22].show();
      rabbitImg[22].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-24, rabbitImg[23];
    rabbitImg[22].hide();
    rabbitImg[23].show();
    rabbitImg[23].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s16(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-24, rabbitImg[23];
  rabbitImg[23].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-25, rabbitImg[24];
      rabbitImg[24].show();
      rabbitImg[24].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-26, rabbitImg[25];
    rabbitImg[24].hide();
    rabbitImg[25].show();
    rabbitImg[25].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s17(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-26, rabbitImg[25];
  rabbitImg[25].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-27, rabbitImg[26];
      rabbitImg[26].show();
      rabbitImg[26].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-28, rabbitImg[27];
    rabbitImg[26].hide();
    rabbitImg[27].show();
    rabbitImg[27].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s18(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-26, rabbitImg[25];
  rabbitImg[27].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-29, rabbitImg[28];
      rabbitImg[28].show();
      rabbitImg[28].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-30, rabbitImg[29];
    rabbitImg[28].hide();
    rabbitImg[29].show();
    rabbitImg[29].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s19(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-30, rabbitImg[29];
  rabbitImg[29].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-31, rabbitImg[30];
      rabbitImg[30].show();
      rabbitImg[30].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-32, rabbitImg[31];
    rabbitImg[30].hide();
    rabbitImg[31].show();
    rabbitImg[31].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s20(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-32, rabbitImg[31];
  rabbitImg[31].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-33, rabbitImg[32];
      rabbitImg[32].show();
      rabbitImg[32].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-34, rabbitImg[33];
    rabbitImg[32].hide();
    rabbitImg[33].show();
    rabbitImg[33].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s21(){
 //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-34, rabbitImg[33];
  rabbitImg[33].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-35, rabbitImg[34];
      rabbitImg[34].show();
      rabbitImg[34].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-36, rabbitImg[35];
    rabbitImg[34].hide();
    rabbitImg[35].show();
    rabbitImg[35].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s22(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-36, rabbitImg[35];
  rabbitImg[35].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-37, rabbitImg[36];
      rabbitImg[36].show();
      rabbitImg[36].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-38, rabbitImg[37];
    rabbitImg[36].hide();
    rabbitImg[37].show();
    rabbitImg[37].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s23(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-38, rabbitImg[37];
  rabbitImg[37].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-39, rabbitImg[38];
      rabbitImg[38].show();
      rabbitImg[38].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-40, rabbitImg[39];
    rabbitImg[38].hide();
    rabbitImg[39].show();
    rabbitImg[39].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s24(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-40, rabbitImg[39];
  rabbitImg[39].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-41, rabbitImg[40];
      rabbitImg[40].show();
      rabbitImg[40].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-42, rabbitImg[41];
    rabbitImg[40].hide();
    rabbitImg[41].show();
    rabbitImg[41].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s25(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-42, rabbitImg[41];
  rabbitImg[41].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-43, rabbitImg[42];
      rabbitImg[42].show();
      rabbitImg[42].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-44, rabbitImg[43];
    rabbitImg[42].hide();
    rabbitImg[43].show();
    rabbitImg[43].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s26(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-44, rabbitImg[43];
  rabbitImg[43].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-45, rabbitImg[44];
      rabbitImg[44].show();
      rabbitImg[44].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-46, rabbitImg[45];
    rabbitImg[44].hide();
    rabbitImg[45].show();
    rabbitImg[45].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s27(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-46, rabbitImg[45];
  rabbitImg[45].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-47, rabbitImg[46];
      rabbitImg[46].show();
      rabbitImg[46].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-48, rabbitImg[47];
    rabbitImg[46].hide();
    rabbitImg[47].show();
    rabbitImg[47].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s28(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-48, rabbitImg[47];
  rabbitImg[47].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-49, rabbitImg[48];
      rabbitImg[48].show();
      rabbitImg[48].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-50, rabbitImg[49];
    rabbitImg[48].hide();
    rabbitImg[49].show();
    rabbitImg[49].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s29(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-50, rabbitImg[49];
  rabbitImg[49].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-51, rabbitImg[50];
      rabbitImg[50].show();
      rabbitImg[50].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-52, rabbitImg[51];
    rabbitImg[50].hide();
    rabbitImg[51].show();
    rabbitImg[51].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s30(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-52, rabbitImg[51];
  rabbitImg[51].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-53, rabbitImg[52];
      rabbitImg[52].show();
      rabbitImg[52].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-54, rabbitImg[53];
    rabbitImg[52].hide();
    rabbitImg[53].show();
    rabbitImg[53].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s31(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-54, rabbitImg[53];
  rabbitImg[53].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-55, rabbitImg[54];
      rabbitImg[54].show();
      rabbitImg[54].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-56, rabbitImg[55];
    rabbitImg[54].hide();
    rabbitImg[55].show();
    rabbitImg[55].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s32(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-56, rabbitImg[55];
  rabbitImg[55].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-57, rabbitImg[56];
      rabbitImg[56].show();
      rabbitImg[56].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-58, rabbitImg[57];
    rabbitImg[56].hide();
    rabbitImg[57].show();
    rabbitImg[57].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s33(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-58, rabbitImg[57];
  rabbitImg[57].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-59, rabbitImg[58];
      rabbitImg[58].show();
      rabbitImg[58].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-60, rabbitImg[59];
    rabbitImg[58].hide();
    rabbitImg[59].show();
    rabbitImg[59].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

//step count = 27; hoeing finished;
//extra bonus reminder
function s34(){
  //textAlign(CENTER);
  // fill(yellow);
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  
  //showing rabbit-61, rabbitImg[60];
  rabbitImg[59].hide();
  rabbitImg[60].show();
  rabbitImg[60].center();
  
  textAlign(LEFT);
  let fontSize = width/23;
  let reminderText = "You may have found jogging OR a more intense movement can bring extra Energy Count ~";
  let bbox = nunitoRegular.textBounds(reminderText, width/2, height/7, fontSize);
  fill(green);
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*4.5,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(reminderText,width/7,height/7,width-width/3.5);

  if(pressValue==14){
    // nextScene();
    sceneFlag=1;
  }
}

function s35(){
  //textAlign(CENTER);
  // fill(yellow);
  // text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  
  //showing rabbit-62, rabbitImg[61];
  rabbitImg[60].hide();
  rabbitImg[61].show();
  rabbitImg[61].center();
  
  textAlign(LEFT);
  let fontSize = width/23;
  let reminderText = "Let’s take this advantage!";
  let bbox = nunitoRegular.textBounds(reminderText, width/2, height/7, fontSize);
  fill(green);
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*2,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(reminderText,width/7,height/7,width-width/3.5);
  
  if(pressValue==16){
    // nextScene();
    sceneFlag=1;
  }
}

//begin walking step counting again;
//change reminder to jogging
function s36(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-62, rabbitImg[61];
  rabbitImg[61].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text("Let's try jogging~",windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-63, rabbitImg[62];
      rabbitImg[62].show();
      rabbitImg[62].center();
    }
        else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-64, rabbitImg[63];
    rabbitImg[62].hide();
    rabbitImg[63].show();
    rabbitImg[63].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s37(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-64, rabbitImg[63];
  rabbitImg[63].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text("Let's try jogging~",windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-65, rabbitImg[64];
      rabbitImg[64].show();
      rabbitImg[64].center();
    }
        else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-66, rabbitImg[65];
    rabbitImg[64].hide();
    rabbitImg[65].show();
    rabbitImg[65].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s38(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-66, rabbitImg[65];
  rabbitImg[65].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text("Let's try jogging~",windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-67, rabbitImg[66];
      rabbitImg[66].show();
      rabbitImg[66].center();
    }
        else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-68, rabbitImg[67];
    rabbitImg[66].hide();
    rabbitImg[67].show();
    rabbitImg[67].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s39(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-68, rabbitImg[67];
  rabbitImg[67].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text("Let's try jogging~",windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-69, rabbitImg[68];
      rabbitImg[68].show();
      rabbitImg[68].center();
    }
        else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-70, rabbitImg[69];
    rabbitImg[68].hide();
    rabbitImg[69].show();
    rabbitImg[69].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s40(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-70, rabbitImg[69];
  rabbitImg[69].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  text("Let's try jogging~",windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-71, rabbitImg[70];
      rabbitImg[70].show();
      rabbitImg[70].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-72, rabbitImg[71];
    rabbitImg[70].hide();
    rabbitImg[71].show();
    rabbitImg[71].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

//remove jogging reminder;
function s41(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-72, rabbitImg[71];
  rabbitImg[71].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-73, rabbitImg[72];
      rabbitImg[72].show();
      rabbitImg[72].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-74, rabbitImg[73];
    rabbitImg[72].hide();
    rabbitImg[73].show();
    rabbitImg[73].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s42(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-74, rabbitImg[73];
  rabbitImg[73].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-75, rabbitImg[74];
      rabbitImg[74].show();
      rabbitImg[74].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-76, rabbitImg[75];
    rabbitImg[74].hide();
    rabbitImg[75].show();
    rabbitImg[75].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s43(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-76, rabbitImg[75];
  rabbitImg[75].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-77, rabbitImg[76];
      rabbitImg[76].show();
      rabbitImg[76].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-78, rabbitImg[77];
    rabbitImg[76].hide();
    rabbitImg[77].show();
    rabbitImg[77].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s44(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-78, rabbitImg[77];
  rabbitImg[77].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-79, rabbitImg[78];
      rabbitImg[78].show();
      rabbitImg[78].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-80, rabbitImg[79];
    rabbitImg[78].hide();
    rabbitImg[79].show();
    rabbitImg[79].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s45(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-80, rabbitImg[79];
  rabbitImg[79].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-81, rabbitImg[80];
      rabbitImg[80].show();
      rabbitImg[80].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-82, rabbitImg[81];
    rabbitImg[80].hide();
    rabbitImg[81].show();
    rabbitImg[81].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s46(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-82, rabbitImg[81];
  rabbitImg[81].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-83, rabbitImg[82];
      rabbitImg[82].show();
      rabbitImg[82].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-84, rabbitImg[83];
    rabbitImg[82].hide();
    rabbitImg[83].show();
    rabbitImg[83].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s47(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-84, rabbitImg[83];
  rabbitImg[83].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-85, rabbitImg[84];
      rabbitImg[84].show();
      rabbitImg[84].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-86, rabbitImg[85];
    rabbitImg[84].hide();
    rabbitImg[85].show();
    rabbitImg[85].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s48(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-86, rabbitImg[85];
  rabbitImg[85].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-87, rabbitImg[86];
      rabbitImg[86].show();
      rabbitImg[86].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-88, rabbitImg[87];
    rabbitImg[86].hide();
    rabbitImg[87].show();
    rabbitImg[87].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s49(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-88, rabbitImg[87];
  rabbitImg[87].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-89, rabbitImg[88];
      rabbitImg[88].show();
      rabbitImg[88].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-90, rabbitImg[89];
    rabbitImg[88].hide();
    rabbitImg[89].show();
    rabbitImg[89].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s50(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-90, rabbitImg[89];
  rabbitImg[89].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-91, rabbitImg[90];
      rabbitImg[90].show();
      rabbitImg[90].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-92, rabbitImg[91];
    rabbitImg[90].hide();
    rabbitImg[91].show();
    rabbitImg[91].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s51(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-92, rabbitImg[91];
  rabbitImg[91].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-93, rabbitImg[92];
      rabbitImg[92].show();
      rabbitImg[92].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-93, rabbitImg[93];
    rabbitImg[92].hide();
    rabbitImg[93].show();
    rabbitImg[93].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s52(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-94, rabbitImg[93];
  rabbitImg[93].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-95, rabbitImg[94];
      rabbitImg[94].show();
      rabbitImg[94].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-96, rabbitImg[95];
    rabbitImg[94].hide();
    rabbitImg[95].show();
    rabbitImg[95].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s53(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //hiding rabbit-96, rabbitImg[95];
  rabbitImg[95].hide();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/18);
  fill(green);
  // text('Please take a step to\ncharge RabbitRabbit',windowWidth/2,windowHeight/6);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  let magnitude = sqrt(accelerationX*accelerationX);
  
  magnitudeDelta = (magnitude + magnitudePrevious) / 2 ;
  
  if(flag==0){
    if(magnitudeDelta<6){
      //showing rabbit-97, rabbitImg[96];
      rabbitImg[96].show();
      rabbitImg[96].center();
    }
    else{
      stepCount=stepCount+1;
      flag = 1; 
      if(magnitudeDelta>10){
        stepCount=stepCount+1;
        intenseMovementDetection();
      }
    }
  }
  //when threshold = 6 -> walking (10 for running);
  if(magnitudeDelta>6 && flag == 1){
    basicMovementDetection();
    
    //showing rabbit-98, rabbitImg[97];
    rabbitImg[96].hide();
    rabbitImg[97].show();
    rabbitImg[97].center();
  }
  if (magnitudeDelta < 6 && flag == 1)
  {
    flag = 0;
    // nextScene();
    sceneFlag=1;
  }
}

function s54(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //showing rabbit-99, rabbitImg[98];
  rabbitImg[97].hide();
  rabbitImg[98].show();
  rabbitImg[98].center();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  textAlign(LEFT);
  let fontSize = width/23;
  let congratText = "Congratulations! You successfully grew a ";
  let bbox = nunitoRegular.textBounds(congratText, width/2, height/7, fontSize);
  fill(green);
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*3.5 ,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(congratText,width/7,height/7,width-width/3.5);
  image(imgCarrotSign,width/3.4 ,height/6.5 ,width/15,width/15);
  
  if(pressValue==18){
    // nextScene();
    sceneFlag=1;
  }
  
}


function s55(){
  //text("scene num: "+sceneNum,windowWidth/2,30);
  // text("Img Index: "+imgIndex,windowWidth/2,60);
  //text("flag: "+flag,windowWidth/2,90);
  
  //showing rabbit-100,rabbitImg[99];
  rabbitImg[98].hide();
  rabbitImg[99].show();
  rabbitImg[99].center();
  
  textAlign(CENTER);
  textFont(nunitoBold);
  textSize(windowWidth/13);
  fill('#FFB84E');
  text('Energy Count : ' + int(stepCount),windowWidth/2,windowHeight-windowHeight/7);
  
  textAlign(LEFT);
  let fontSize = width/23;
  let congratText = "The energy you accumulate while growing plants can be converted into coins.";
  let bbox = nunitoRegular.textBounds(congratText, width/2, height/7, fontSize);
  fill(green);
  noStroke();
  rect(width/10, bbox.y-fontSize, width-width/5, bbox.h+fontSize*4.5 ,fontSize*2);
  fill(255);
  textFont(nunitoRegular);
  textSize(fontSize);
  text(congratText,width/7,height/7,width-width/4);
  
  if(pressValue==20){
    // nextScene();
    sceneFlag=1;
  }
  
}

function s56(){
  rabbitImg[99].hide();
  
  image(coinPage,0, 0,width,landingPage.height*width/landingPage.width);//to fit width;
  
  push();
  translate(windowWidth/1.8,windowHeight-windowHeight/3.25);
  angleMode(DEGREES);
  rotate(15);
  
  textAlign(LEFT);
  textFont(nunitoExtraBold);
  textSize(windowWidth/6);
  fill(lightYellow);
  text('X' + int(stepCount),0,0);
  pop();
  
  if(pressValue==22){
    // nextScene();
    sceneFlag=1;
  }
  
}


// ------------------------------------------------------------------
// SENSOR PERMISSION MANAGER FOR iOS13 AND SAFARI
// This is a version from Fabio Rebelo Paiva(https://editor.p5js.org/jen_GSA/sketches/gprEIMGe2) which derived from Dae In Chung's video(https://youtu.be/AbB9ayaffTc).

let sensorPermissionGranted = false;

function checkSensorPermissions() {
  // DeviceOrientationEvent and DeviceMotionEvent
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    // Must be iOS device so we need to ask permission to use sensors
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // show permission dialogue only first time
        // let button = createButton("Allow access to sensors");
        // button.mousePressed(requestAccess);
        
        let button = createButton("allow access to sensors");
        button.style('background-color', 'white');
        button.style('color', '#FFB84E');
        button.style('font-size', '5vw');
        button.style('font-family', nunitoRegular);
        button.style('border', 'none');
        button.style('border-radius', '10vw');
        button.style('padding', '5vw');
  
        button.center();
        button.mousePressed(requestAccess);
        
        throw error;
      })
      .then(() => {
        // already granted permission
        sensorPermissionGranted = true;
      })
  } else {
    // Non-iOS13 device so no worries
    sensorPermissionGranted = true;
  }
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        // User has granted permission to access sensors
        sensorPermissionGranted = true;
      } else {
        // User has denied permission to access sensors
        sensorPermissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove(); // kills button after user interaction
}