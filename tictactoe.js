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
    
    //create handleclick factory function
    function handleclick(index, element)
    {
        //check the squares is empty
        if(squares[index].getState() == '') // make sure if the squares block is empty
        {
            turn++; // increase the turn so it can decide what to print
            let currentPlayer = turn % 2 !== 0 ? 'X':'O'; // decide if player 2 will create X and player 1 will create O
            squares[index].setState(currentPlayer); // per square is connected to the result of the currentPlayer turns
            element.textContent = currentPlayer; // Write the result to the square

            checkWin(); // Future function to use
        }
    }

    //Determine who's going to win function
    function checkWin()
    {
        const winningCombos =  //Object for winning pattern
        [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
        ]

        for(let combo of winningCombos) //looping through the combo and make sure combo is a,b,and c
        {
            const [a,b,c] = combo; // destructuring combo so the squares[index] can use and be relevant

            if(squares[a].getState() !== '' && // make if win statement
            squares[a].getState() == squares[b].getState() &&
            squares[a].getState() == squares[c].getState())
            {
                console.log("Player ${squares[a].getState()} Wins!");
                return;
            }

            if (turn === 9) // make draw statement
            {
                console.log("It's a draw");
            }
        }

        
    }
    
}

//create a DOM to connect JS to HTML
document.addEventListener('DOMContentLoaded',function() // make sure when the DOMloaded, the game function is running
{
    const board = gameBoard(); // make variable to be an ambassador of game board in this DOM manipulation
    const squareElements = Array.from(document.getElementsByClassName("squarespace")) // call the HTML divs to the JS to use
    squareElements.forEach((squareElement, index) => {
        squareElement.addEventListener("click", function() {
            board.handleclick(index, squareElement);  // Call the handleClick function properly
        });
    });

})





