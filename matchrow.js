function matchrow(){
    //Horizonatal
    for(let i=0; i<boardHeight; i++){
        for(let j=0; j<boardWidth-3; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i][j+1] == currentPlayer && boardA[i][j+2] == currentPlayer && boardA[i][j+3]==currentPlayer && boardA[i][j+4] == currentPlayer){
                return true; 
            }
            else if(boardA[i][j] == currentPlayer && boardA[i][j+1] == currentPlayer && boardA[i][j+2] == currentPlayer && boardA[i][j+3]==currentPlayer)
            {   
                if(currentPlayer==1){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player1 + " is one hit away from victory!!";
                }   
                else if(currentPlayer==2){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player2 + " is one hit away from victory!!";

                }
                else if(currentPlayer==3){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player3 + " is one hit away from victory!!";

                }
            }


        }
    }
    //vertical
    for(let i=0; i<boardHeight-3; i++){
        for(let j=0; j<boardWidth; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i+1][j] == currentPlayer && boardA[i+2][j] == currentPlayer && boardA[i+3][j]==currentPlayer && boardA[i+4][j]== currentPlayer){
                return true;
                
            }
            else if(boardA[i][j] == currentPlayer && boardA[i+1][j] == currentPlayer && boardA[i+2][j] == currentPlayer && boardA[i+3][j]==currentPlayer)
            {
                if(currentPlayer==1){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player1 + " is one hit away from victory!!";
                    
                }   
                else if(currentPlayer==2){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player2 + " is one hit away from victory!!";
                    
                }
                else if(currentPlayer==3){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player3 + " is one hit away from victory!!";
                    
                }
            }
        }
    }
     
     //diagonal
     for(let i=0; i<boardHeight-3; i++){
        for(let j=0; j<boardWidth-3; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i+1][j+1] == currentPlayer && boardA[i+2][j+2] == currentPlayer && boardA[i+3][j+3]==currentPlayer && boardA[i+4][j+4]== currentPlayer){
                return true;
                
            }
            else if(boardA[i][j] == currentPlayer && boardA[i+1][j+1] == currentPlayer && boardA[i+2][j+2] == currentPlayer && boardA[i+3][j+3]==currentPlayer){
                if(currentPlayer==1){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player1 + " is one hit away from victory!!";
                    
                }   
                else if(currentPlayer==2){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player2 + " is one hit away from victory!!";
                    
                }
                else if(currentPlayer==3){
                    document.getElementById("playerhint").innerHTML= "Hint: " + player3 + " is one hit away from victory!!";
                    
                }  
            }
        }
     }
     //another diagonal
     for(let i=4; i<boardHeight; i++){
        for(let j=0; j<boardWidth-3; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i-1][j+1] == currentPlayer && boardA[i-2][j+2] == currentPlayer && boardA[i-3][j+3]==currentPlayer && boardA[i-4][j+4]== currentPlayer){
                return true;
                
            }
        else if(boardA[i][j] == currentPlayer && boardA[i-1][j+1] == currentPlayer && boardA[i-2][j+2] == currentPlayer && boardA[i-3][j+3]==currentPlayer){
            if(currentPlayer==1){
                document.getElementById("playerhint").innerHTML= "Hint: " + player1 + " is one hit away from victory!!";
                
            }   
            else if(currentPlayer==2){
                document.getElementById("playerhint").innerHTML= "Hint: " + player2 + " is one hit away from victory!!";
                
            }
            else if(currentPlayer==3){
                document.getElementById("playerhint").innerHTML= "Hint: " + player3 + " is one hit away from victory!!";
                
            }  
        }
     }
}

return false;
}