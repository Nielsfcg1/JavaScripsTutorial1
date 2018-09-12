
// 3 verschillende brommers met eigenschappen zoals cc, snelheid en overbrenging
/*
var Brommer = function(cc, speed, transmission) 
{
    this.cc = cc;
    this. speed = speed;
    this.transmission = transmission;    
}

Brommer.prototype.calculateAccelleration = function ()
{
    //console.log(this.speed/100);
}

var Senda = new Brommer(80, 100, 'manual transmission');

var tomos = new Brommer(50, 30, 'Automatic transmission');

var speedfight = new Brommer(50, 70, 'Vario transmission');

Senda.calculateAccelleration();
tomos.calculateAccelleration();
speedfight.calculateAccelleration();


*/
// Functions returning functions
// With If/Else
/*
function brommerQuestions(brommer)
{
    if(brommer === 'senda')
    {
        return function (type)
        {
            console.log('Is het een Derbi ' + type + '?');
        }
    }
    else if (brommer === 'tomos')
    {
        return function (type)
        {
            console.log('Is het een Tomos ' + type + '?');
        }
    }
    else if (brommer === 'speedfight')
    {
        return function (type)
        {
            console.log('Is het een speedight ' + type + '?');
        }
    }
    else
    {
        return function (type)
        {
            console.log('Dat lijkt me geen Derbi, Tomos of Speedfight model');
        }
    }
}
*/

// With a switch
// Not working. Undefined 'type'
// Het kan wel werken door 2 inputs te geven bij de functie en regel 87, maar dan roep je niet een fuctie aan met een functie. OF tenminste heeft een fuctie een andere functie als output. 
/*
function brommerQuestions(brommer)
{
    switch(brommer)
    {
        case'derbi':
            console.log('Is het een Derbi ' + type + '?');
            break;
        case 'tomos':
            console.log('Is het een Tomos ' + type + '?');
            break;
        case 'speedfight':
            console.log('Is het een speedight ' + type + '?');
            break;
        default:
            console.log('Dat lijkt me geen Derbi, Tomos of Speedfight model');

    }
}

/* var derbiQuestion = brommerQuestions ('derbi');
var tomosQuestion = brommerQuestions ('tomos');
var speedfightQuestion = brommerQuestions ('speedfight');
var cittaQuestion = brommerQuestions('Citta');

derbiQuestion('Senda');
tomosQuestion('Quaddro');
speedfightQuestion('2');
cittaQuestion();
*/











