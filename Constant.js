//Constant Values to set up the game
Constant();
draw();
control()


function Constant(){
    SizeofCanvas=530;
    boardHeight=9;
    boardWidth=8;
    color= {
        "board":"white",
        "player": {
            0: "black",
            1: "blue",
            2: "Red",
            3: "Yellow",
        }
        };
    currentPlayer=1;
    counter=0;//for player1
    counter2=0;//for player2
    counter3=0;
    end=false;//game end
    constantBoard();
    constantCanvas();
    }