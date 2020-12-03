//Player1=1
//Player2=2
//Player3=3

  
let player1= prompt("Player 1 name", "");
let player2=prompt("Player 2 name", "");
let player3=prompt("Player 3 name", "");

document.getElementById("player").innerHTML="Welcome!";
let canvas=document.getElementById("myCanvas");
let context=canvas.getContext('2d');

//creates a board of Array with heighth 7 and width 6 
function constantBoard(){
boardA=[];
for(let i=0; i<boardHeight; i++)
{
let x=[];
for(let i=0; i<boardWidth; i++)
{
    x.push(0);//0 means no player

}
boardA.push(x);
}
console.log(boardA);
}

//Sets the size of canvas and circle
function constantCanvas(){
if(boardHeight+1 > boardWidth){
    canvas.height = SizeofCanvas;
    CircleSize = SizeofCanvas / (boardHeight+1);
    canvas.width =  boardWidth * CircleSize;
} else {
    canvas.width = SizeofCanvas;
    CircleSize = SizeofCanvas / boardWidth;
    canvas.height =  (boardHeight+1) * CircleSize;
    
}
}


//Makes the circle in tiles of the board
function drawCircletile(i, j, tileColor){
let x=(i*CircleSize)+(CircleSize/2);
let y=(j*CircleSize)+(CircleSize/2);
let tileSize=((CircleSize/1.3)/2);


context.fillStyle=color.player[tileColor];
context.beginPath();
context.arc(x, y, tileSize, 0, 2*Math.PI);
context.fill();
}

//initial or draw the board on canvas
function draw(){
context.fillStyle=color.board;
context.fillRect(0, 0+CircleSize, boardWidth*CircleSize, boardHeight*CircleSize);
for(let i=0; i<boardHeight; i++){
for(let j=0; j<boardWidth;j++)
{
    drawCircletile(i, j+1, boardA[j][i]);
}
}
}

function clearcanvas(){
context.clearRect(0,0,canvas.width,CircleSize);
}

//Player control with mouse to click and move
function control(){
canvas.addEventListener('mousemove', (e) => {
    let x= Math.floor((e.clientX-canvas.offsetLeft)/CircleSize);//Movement of mouse within the canvas
    if(!end){
        clearcanvas();
        drawCircletile(x, 0, currentPlayer);//As defined above
    }
});
canvas.addEventListener('click', (e) => {
    let x= Math.floor((e.clientX-canvas.offsetLeft)/CircleSize);//Whenever click in the canvas e.clientX-canvas.offsetLeft
    
    if(!end){
        for(j=boardWidth-1; j>=0; j--){
            if(boardA[j][x]==0){
                move(x, j);
                break;
            }

        }
    }

});

}

//Switching Player
function otherPlayer() {
if(currentPlayer==1){
    currentPlayer=2;
    document.getElementById("player").innerHTML= player1+ "'s(blue) Turns : " + counter;
}
else if(currentPlayer==2){
    document.getElementById("player").innerHTML= player2+ "'s(red) Turns : " + counter2;
    currentPlayer=3;
}
else if(currentPlayer==3){
    document.getElementById("player").innerHTML= player3+ "'s(yellow) Turns : " + counter3;
    currentPlayer=1;
}

}


//Player move and counter
function move(x,y){
if(currentPlayer==1){
    counter++
    
}
else if(currentPlayer==2){
    counter2++
}
else if(currentPlayer==3){
    counter3++
}
boardA[y][x]=currentPlayer;
document.getElementById("myAudio").play();

if(Win()){
    document.getElementById("playerhint").innerHTML= " ";
    if(currentPlayer==1){
    document.getElementById("player").innerHTML = player1 + " Wins!!" + " No of Turns took to win: " + counter;  
    document.getElementById("winner").play();
    clearcanvas();
    }
    else if(currentPlayer==2){
        document.getElementById("player").innerHTML=player2 +" Wins!!"+" No of Turns took to win: " +counter2;
        document.getElementById("winner").play();
        clearcanvas();
     }
     else if(currentPlayer==3){
        document.getElementById("player").innerHTML=player3 +" Wins!!"+" No of Turns took to win: " +counter2;
        document.getElementById("winner").play();
        clearcanvas();
     }
}
else if(tie()){
    document.getElementById("player").innerHTML="It's a tie! Try Again";
    document.getElementById("playerhint").innerHTML= " ";
    clearcanvas();
}
else{
    otherPlayer();
    clearcanvas();
    drawCircletile(x, 0, currentPlayer);
}
draw();   
}

//if winning directions
function Win(){
if(matchrow()){
end= true;
return true;
}
}

//If no winning direction
function tie(){
if(counter== 22)
{
    end=true;
    return true;

}
}

//Restart the canvas

function Restart(){
document.getElementById("player").innerHTML="Welcome Back!";
Constant();
currentPlayer=1;
draw();
}


