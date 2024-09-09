// CREATING TIC-TAC-TOE GAME

//Specifications :
// a. There is a board consisted of 9 small square-space inside it
// b. There is 2 variable of X and O to use for each players
// c. Player move after each other
// d. If there are 3 consecutive shapes diagonally, vertically, horizontally on the board, the player who has the shape win the game

// How to work this thing ( mainly using object, function factories, IIFE)

//create a square factory function
function createSquare()
{
    let state = '';
    return
    {
        getState: () => state,
        setState: (newState) => {state = newState;},
        reset: () => {state = '';}
    };
}


//create gameboard function
function gameBoard()
{
    let squares = []; // creating an array to store square created by the createSquare funct
    let turn = 0; // counting player turn next time
    for(i = 0; i < 9 ;i++)
        {
            squares.push(createSquare()); // pushing the square created in the createSquare funct in tho the squares array each by iterating it through loop
        }
}

//create handleclick factory function
function handleclick()
{
    
}
