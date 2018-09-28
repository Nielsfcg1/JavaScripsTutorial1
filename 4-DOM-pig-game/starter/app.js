/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//#############################################################################
/*
//dice = Math.floor(Math.random() * 6) + 1;


console.log(dice);

// Selecting element from the HTML and display the random number there
// Make it work for both players by using the variable activePlayer
// textContent only works for text and not HTML content
// HTML id's are selected by #....
// Setter
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' +dice + '</em>'

// Reading and saving values from the webpage in a variable
// Getter
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/
//###############################################################################


//Hide the dice by manipulating CSS element. Selecting the element by taking the class by using the >.<
//document.querySelector('.dice').style.display = 'none';

// getElementById works quicker than querySelector because you don't have to use the #
/* document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/
//                                                   Type of event & function that have to be called
// A callback function is a function that is called by an eventlisterer and not us
// An anonymous function is a function that is written inside an 'addEventListener' it has no name and can not be reused

var scores, roundScore, activePlayer, dice, prevDice, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function()
{   if (gamePlaying)
    {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;     
        var dice2 = Math.floor(Math.random() * 6) + 1;     

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        document.querySelector('')


        // 3. Update the round score IF the rolled numer is not 1 OR dice & prevDice are not both 6
       /* if (dice === 6 && prevDice === 6)
        { 
        scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        }

        else if (dice !== 1)
        {    //add score
            roundScore += dice;            
        }
        else
        {   //next player turn
            // Set score to 0 and display it, give turn to the other player
            nextPlayer();
        }
        prevDice = dice;
        */
       if (dice1 !== 1 && dice2 !== 1)
        { 
            roundScore += dice1 + dice2;  
            document.querySelector('#current-' + activePlayer).textContent = roundScore;          
        }
        else
        {   
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function()
{   if (gamePlaying)
    {
        // 1. Add current score to golbal score
        scores[activePlayer] += roundScore;

        // 2. Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
        var scoreGoal = document.querySelector('.final-score').value;
        var winningScore;

        if(scoreGoal)
        {
            winningScore = scoreGoal;
        } else {
            winningScore = 100;
        }
        // 3. Check if player won the game 
        if (scores[activePlayer] >= winningScore)
            {
                gamePlaying = false;
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            }
        else {   nextPlayer();}
    }

});

function nextPlayer()
{   // Set score to 0 and also the display
    roundScore = 0;
    prevDice = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore.textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';

    // Remove and add HTML elements
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

}

document.querySelector('.btn-new').addEventListener('click', init);


function init()
{ 
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0; 
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



























