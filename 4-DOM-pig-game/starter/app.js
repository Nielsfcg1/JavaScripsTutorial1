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

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function()
{   if (gamePlaying)
    {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1; 

        // 2. Display the result
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';


        // 3. Update the round socre IF the rolled numer is not 1
        if(dice !== 1)
        {    //add score
            roundScore += dice;
            roundScoreDom = document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else
        {   //next player turn
            // Set score to 0 and display it, give turn to the other player
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
            

        // 3. Check if player won the game 
        if (scores[activePlayer] >= 20)
            {
                gamePlaying = false;
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            }
        else {   nextPlayer();}
    }

});

function nextPlayer()
{   // Set score to 0 and also the display
    roundScore = 0;
    roundScoreDom.textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.dice').style.display ='none';

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

    var roundScoreDom;
    
    document.querySelector('.dice').style.display = 'none';

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



























