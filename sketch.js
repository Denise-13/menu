var x=176;
var y=255;
var opcao=1;
var tela=0
let img;
function preload() {
  img = loadImage('im.png');
}
  
function setup() {
  createCanvas(650, 650);
 
}
function draw() {
  background(img,650,650);
  if(tela==0){
    menu();
      
  if(tela==1){
    fase1();
  }
  if(tela==2){
    instrucao();
  }
  if(tela==3){
    creditor();
  }
    
  }
}
function menu() {
  rect(x,y,170,30);
  textSize(35);
  textFont('Goudy Stout');
  text('BIOMAS',180,140);
  textSize(25);
  textFont('MV Boli Black')
  text('JOGAR', 178,280);
  text('INSTRUÇÕES',178,350);
  text('CRÉDITOS',178,420)
  
}
function fase1(){
     text('FASE 1',135,200);
    
}
function instrucao(){
  text('INSTRUÇÕES',136,200);
  //APRESENTE SUAS INSTRUÇÕES
}
function creditos(){
  //APRESENTE SEUS CREDITOS
  text('CRÉDITOS',136,200);

}
function keyPressed() {
  if(key=="ArrowUp" && y>255){
    y=y-70
  opcao=opcao-1
    
}
  if(key=="ArrowDown" && y<370){
    y=y+70;
    opcao=opcao+1
   
}
  if(key=="Enter"){
    tela=opcao
 }
  if(key=="Tab"){
    tela=0

    
  }
  
}  


  

 
