
// 3 verschillende brommers met eigenschappen zoals cc, snelheid en overbrenging

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

















