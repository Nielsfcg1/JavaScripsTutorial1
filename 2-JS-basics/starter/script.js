
/*
var firstName = 'Niels';
var lastName = 'Tromp';
var fullName;
var age = 32;
var fullAge = true; 

console.log(firstName + ' ' + lastName);
alert('dikzak');

var fullName = prompt('Wat is je naam?');
console.log(fullName);
*/

// ################################################################
//college 11
/*
var yearJohn; 
var inputYear;
var today = new Date();
var currentyear = today.getFullYear();

inputYear = prompt('What is your age?');
yearJohn = 2018 - inputYear;
alert('So you are born in ' + yearJohn);
console.log(currentyear);
*/
// ################################################################
//Challenge lecture 12 BMI
/*
var height, mass, BMI;
var healthyBMI = 24;

height = prompt('Hoe lang ben jij in meters?');
mass = prompt('Hoeveel weeg jij in kilogrammen?');
BMI = parseFloat(mass/(height*height)).toFixed(2); 
if(BMI<= healthyBMI)
{
    alert('Jouw BMI is ' + BMI +', dit is een gezond BMI');
}
else
{
    alert('Jouw BMI is ' + BMI + 'Dit is een ongezond BMI');
}
*/

// ################################################################
//The Ternary Operator and Switch Statements

//Ternary Operator
/*
var firstName = 'John';
var age = 16;

age>=18 ? console.log(firstName + ' Drinks beer')
: console.log(firstName + ' Drinks juice')

var drink = age >= 18 ? 'Beer' : 'Juice';
*/

// ################################################################
//Switch statement
/*
var firstName = 'John';
var job = 'Driver';
switch(job)
{
    case 'Teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'Driver':
        console.log(firstName + ' Drives an uber in Lisabon');
        break;
    case 'Designer':
        console.log(firstName + ' designs beatiful websites');
        break;
    default:
        console.log(firstName + ' Does something else');
    
}
*/

// ################################################################
// BMI challenge in een switch statement
/*

var height, mass, BMI;
var healthyBMI = 24;

height = prompt('Hoe lang ben jij in meters?');
mass = prompt('Hoeveel weeg jij in kilogrammen?');
BMI = parseFloat(mass/(height*height)).toFixed(2); 

switch(true){
    case BMI<=healthyBMI:
        alert('Jouw BMI is ' + BMI +', dit is een gezond BMI');
        break;
    case BMI>=healthyBMI:
        alert('Jouw BMI is ' + BMI + 'Dit is een ongezond BMI');
        break;
}
*/

// ################################################################
// BMI challenge in een Ternary Operator
/*

var height, mass, BMI;
var healthyBMI = 24;

height = prompt('Hoe lang ben jij in meters?');
mass = prompt('Hoeveel weeg jij in kilogrammen?');
BMI = parseFloat(mass/(height*height)).toFixed(2); 

BMI<=healthyBMI ? alert('Jouw BMI is ' + BMI +', dit is een gezond BMI')
: alert('Jouw BMI is ' + BMI + 'Dit is een ongezond BMI');

*/

// ################################################################
// Truthy and Falsy values and equality operators
// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy value
/*
var height;
height = 23;
if(height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('value is not defined');

}

// Equality operators
if(height == '23')
{
    console.log('The == operator does coercion!');
}
*/

// ################################################################
//Challenge 2 lecture 18
/*
var john1, john2, john3, mike1, mike2, mike3;
john1 = 109;
john2 = 120;
john3 = 103;
mike1 = 116;
mike2 = 94;
mike3 = 123;

var averageJohn = parseFloat((john1 + john2 + john3) / 3).toFixed(0);
var averageMike = parseFloat((mike1 + mike2 + mike3) / 3).toFixed(0);
var averageMary = parseFloat((mary1 + mary2+ mary3 ) / 3).toFixed(0);

//Ternary operator with only 2 vales
/*
averageJohn > averageMike ? console.log('John wins on average score, his score was: ' + averageJohn + ' against ' + averageMike)
: console.log('Mike wins on average score, his score was: ' + averageMike + ' against ' + averageJohn);
*/

//Switch for multiple outcomes. Add in mary and draw cases
/*
var john1, john2, john3, mike1, mike2, mike3, mary1, mary2, mary3;
john1 = 330;
john2 = 120;
john3 = 103;
mike1 = 160;
mike2 = 240;
mike3 = 123;
mary1 = 697;
mary2 = 114;
mary3 = 105;

var averageJohn = parseFloat((john1 + john2 + john3) / 3).toFixed(0);
var averageMike = parseFloat((mike1 + mike2 + mike3) / 3).toFixed(0);
var averageMary = parseFloat((mary1 + mary2 + mary3) / 3).toFixed(0);

console.log(averageJohn + 'John');
console.log(averageMike + 'Mike');
console.log(averageMary + 'Mary');

switch(true)
{
    // John wins
    case (averageJohn > averageMike && averageJohn > averageMary):
        console.log('John wins on average score, his score was: '
        + averageJohn + ' against Mike:' + averageMike + ' and Mary:' + averageMary);
        break;
    
    // Mike wins
    case (averageMike > averageJohn && averageMike > averageMary):
        console.log('Mike wins on average score, his score was: '
        + averageMike + ' against John:' + averageJohn + ' and Mary:' + averageMary);
        break;

    // Mary wins
    case (averageMary > averageJohn && averageMary > averageMike):
        console.log('Mary wins on average score, her score was: '
        + averageMary + ' against John:' + averageJohn + ' and Mike:' + averageMike);
        break;

    // Draw Mike & Mary

    // Draw Mike & John

    // Draw John & Mary

    // Total draw
        default:    
            console.log('the game was a draw, with the scores being: ' + averageMike + ' against ' + averageJohn + ' and ' + averageMary);
}
*/

// ################################################################

/*
function calculateAge (birthYear)
{
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1969);
console.log(ageJohn, ageMary, ageMike);

function yearsUntilRetirement(year, firstName)
{   //Bereken de variabele door de vorige functie aan te roepen met de input. Hierbij kan de input een waarde zijn of variabele. 
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0)
    {
    console.log(firstName + ' Retires in ' + retirement + ' years');
    }
    else
    {
        console.log(firstName + ' has already retired ' + Math.abs(retirement) + ' years');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Mary');

*/
// Dus je maakt eerst je functies voordat je de waarden als input geeft. Net als bij C# geef je de naam op van de functie +(); om deze aan te roepen. Met dit voorbeeld geef je waarden mee die de berekening uitvoeren, waarbij er twee functies samenwerken.


// How I would write it, which is not following the DRY(Don't repeat yourself) principle
// And does not work like this

/*
var ageJohn = 28;
var ageMike = 12;
var ageMary = 44;

function calculateAge()
{
    return 2018 - ageJohn;
    return 2018 - ageMike;
    return 2018 - ageMary;

   
    console.log( 2018 - ageJohn, 2018 - ageMike, 2018 - ageMary);
}
*/

// ################################################################

//function declaration
// function WhatDoYouDo(job, firstname); {}


// Function expression

/*
var whatDoYouDo = function (job, firstname)
{
    switch(job)
    {
        case 'Teacher':
            return firstname + ' teaches kids how to code';

        case 'Driver':
            return firstname + ' learns how to drive';

        case 'Designer':
            return firstname + ' designs beatiful websites';

        default:
            return firstname + ' does soomething else';
    }
}

console.log(whatDoYouDo('Teacher', 'John'));
console.log(whatDoYouDo('Driver', 'Mike'));
console.log(whatDoYouDo('Designer', 'Jane'));

*/

// ################################################################

// Espressions return a value
// 2+3 
// (whatDoYouDo('Teacher', 'John')

// Declarations do not return a value, they preform actions
// if(true) { console.log(23); }

// ################################################################

//Arrays
/*
var names = ['John', 'Mike', 'Mary'];
var years = new Array(1990, 1969, 1948);

// Retrieve data from array
console.log(names.length);
console.log(names);
console.log(names[0]);

names[1] = 'Ben';
// Add a name to the array at the end
names[names.length] = 'Henk';
// Add a name in a chosen place
names[6] = 'Pieter';
console.log(names);

// Different datatypes

var John = ['John', 'Smith', 1990, 'designer', false];

// Add element at the end
John.push('Blue');
// Add element at the begin
John.unshift('Mister');
console.log(John);

//Remove last element
John.pop();
// Remove first element
John.shift();
console.log(John);

console.log(John.indexOf(1990));

var isDesigner = John.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);

*/

// ################################################################
// Coding challenge 3 lecture 23: Tip calculator
/*
var restaurant1 = 124;
var restaurant2 = 48;
var restaurant3 = 268;
var tipAmount = function (amount, restaurantNumber)
*/

    /* Not working Switch statement
    switch(amount)
    {
        case amount <= 50:
                return 'Restaurant ' + restaurantNumber + ' gets a tip of 20%';
        
        case (amount <=200):
            return 'Restaurant ' + restaurantNumber + ' gets a tip of 15%';
        
        case (amount > 200):
            return 'Restaurant ' + restaurantNumber + ' gets a tip of 10%';

    }
    */
   /* Working IF statement

   if(amount <= 50)
   {
    console.log('Restaurant ' + restaurantNumber + ' gets a tip of 20%');
   }
   else if(amount <=200)
   {
    console.log('Restaurant ' + restaurantNumber + ' gets a tip of 15%');
   }
   else
   {
    console.log('Restaurant ' + restaurantNumber + ' gets a tip of 10%');
   }
      
console.log(tipAmount(124, 1));
console.log(tipAmount(48, 2));
console.log(tipAmount(268, 3));
*/

/* ############### Solution of the video ##############

// Een functie die de percentages berekend adhv de gegeven waarden in de opdracht. Aan het // einde van de functie wordt bepaald dat er een waarde ge-returned moet worden.

// Denkwijze: Wat weet ik, wat wil ik berekeken > de hoe uitwerken (functie schrijven).
// Daarna de antwoorden bepalen door de gegeven waarden door de functie te laten lopen. 


   function tipCalculator(bill)
   {
    var percentage;
    if(bill < 50)
   {    percentage =.2;     }

   else if(bill >= 50 && bill < 200)
   {    percentage = .15;   }

   else
   {    percentage = .1;    } 

   return percentage * bill;
}

//Array met de waarden
var bills = [124, 48, 268];

///Array die de tips uitrekenen door gelijk de functie te gebruiken. Hierop liep ik vast //omdat dit nieuw voor mij is. De tips worden dus berekend door de bills door de functie 
// te laten lopen.

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

// Array waarmee de totale uitgaven worden berekekend door de bills en uitgerekende tips //samen te nemen.

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);
*/
// ### own solution using switch and pushing into empty array ####
// #### This did not work because pushing into the array is not done this way(?)
// To calculate the tips you have to call the function with the given parameter.
/*
var tipArray = [];
var billArray = [124, 48, 268];
var payedArray = [];
var percentage

function tipCalculator (amount)
{

    switch(amount)
    {
        case amount <= 50:
            percentage = 0.2;
            return percentage * amount;
            billArray.push (percentage * amount);
        case (amount <=200):
            percentage = 0.15;
            return percentage * amount;
            payedArray.push(percentage * amount);
        case (amount > 200):
            percentage = 0.1;
            return percentage * amount;
            payedArray.push(percentage * amount);
     } 
}
console.log(payedArray);
console.log(billArray);
*/

// #### OBJECTS ################
/*
//Object literal {}
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false 
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// 2nd way to define properties of an object
// new Object syntax
var jane = new object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false, 
    calcAge: function()
    {
        this.age = 2018 - this.birthYear;
    }
};

 john.calcAge();
console.log(john);

*/

// ################################################################
// Coding challenge 4 lecture 27: BMI calculator with objects
/*
var John =
{   firstname: 'John',
    height: 1.83,
    mass: 75,
    calcBMI: function()
    {   this.BMI = this.mass / (this.height * this.height);
        // Return is needed to call the function in line 555. Otherwise you have to
        // call John.BMI
        return this.BMI;
    }
}

var Mark = 
{   firstName: 'Mark',
    height:1.83,
    mass: 85,
    calcBMI: function()
    {   this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

John.calcBMI();
Mark.calcBMI();
highestBMI();

function highestBMI()
{
    if(John.calcBMI() > Mark.calcBMI())
    {
        console.log( John.firstname + ' his BMI is higher, it is ' + John.BMI);
    }
    else if (John.BMI < Mark.BMI)
    {
        console.log('Mark his BMI is higher');
    }
    else
    {
        console.log('John and Mark their BMI is the same')
    }
}
*/

/* ################################################################
* Loops and iteration
*/

// loop until i is greater than 10

/*
for (var i = 0; i <= 10; i+= 2)
{
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// Loop until all array elements are displayed
for (var i = 0; i < john.length; i++)
{
console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length)
{
    console.log(john[i]);
    i++;
}
*/

// Continue and break statement

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++)
{   if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++)
{   if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

*/
// Reverse display
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length -1; i >= 0; i--)
{   
    console.log(john[i]);
}
*/


/* ################################################################
* Coding challenge 5 V1
*/
/*

var john =
{
    firstName: 'John',
    johnBills: [124, 48, 268, 180, 42],
    johnTips: [],
    johnPayed: []
}

function billCalculator()
{
    
    for (var i = 0; i < john.johnBills.length; i++)
    {
        //var precentage;
        var bill = john.johnBills[i];
        // geen veriabele voor john.johnTips want dan werkt push niet meer
        
        if(bill < 50)
        {
             john.johnTips.push(bill * .2);
             john.johnPayed.push(bill * 1.2);   
        }     
        else if (bill >=50 && bill < 200)
        {
            john.johnTips.push(bill * .15);
            john.johnPayed.push(bill * 1.15); 
        } 
        else 
        {
            john.johnTips.push(bill * .1);
            john.johnPayed.push(bill *1.1);
        }
    }        
}
// Ik was vergeten de functie aan te roepen en had de console.log in de for loop staan
billCalculator();
console.log(john);
*/

/* ################################################################
* Coding challenge 5 V1.1
*/
/*

var john =
{
    firstName: 'John',
    johnBills: [124, 48, 268, 180, 42],
    johnTips: [],
    johnPayed: [],
    calcTips: function()    
    {    
        for (var i = 0; i < this.johnBills.length; i++)
        {
            var precentage;
            var bill = this.johnBills[i];
                    
            if(bill < 50)
            {   precentage = .2;     
            }     
            else if (bill >=50 && bill < 200)
            {   precentage = .15; 
            } 
            else 
            {   precentage = .1;
            }

            this.johnTips[i] = (bill * .2);
            this.johnPayed[i] = (bill * 1.2);
        }        
    }
}

var mark =
{
    firstName: 'Mark',
    markBills: [77, 375, 110, 45],
    markTips: [],
    markPayed: [],
    calcTips: function()    
    {    
        for (var i = 0; i < this.markBills.length; i++)
        {
            var precentage;
            var bill = this.markBills[i];
                    
            if(bill < 100)
            {   precentage = .2;     
            }     
            else if (bill >=100 && bill < 300)
            {   precentage = .10; 
            } 
            else 
            {   precentage = .25;
            }

            this.markTips[i] = (bill * .2);
            this.markPayed[i] = (bill * 1.2);
        }        
    }
}
//ik kan beter de bills hetzelfde noemen, hierdoor krijg ik geen duplicate code. De oplossing van de tutorial is hiermee niet mogelijk. Het gemiddelde berekenen kost meer code op mijn manier.

/* ################################################################
* Coding challenge 5 V1.2
*/
/*
var john =
{
    firstName: 'John',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    payed: [],
    calcTips: function()    
    {    
        for (var i = 0; i < this.bills.length; i++)
        {
            var precentage;
            var bill = this.bills[i];
                    
            if(bill < 50)
            {   precentage = .2;     
            }     
            else if (bill >=50 && bill < 200)
            {   precentage = .15; 
            } 
            else 
            {   precentage = .1;
            }

            this.tips[i] = (bill * .2);
            this.payed[i] = (bill * 1.2);
        }        
    }
}

var mark =
{
    firstName: 'Mark',
    bills: [77, 375, 110, 45],
    tips: [],
    payed: [],
    calcTips: function()    
    {    
        for (var i = 0; i < this.bills.length; i++)
        {
            var precentage;
            var bill = this.bills[i];
                    
            if(bill < 100)
            {   precentage = .2;     
            }     
            else if (bill >=100 && bill < 300)
            {   precentage = .10; 
            } 
            else 
            {   precentage = .25;
            }

            this.tips[i] = (bill * .2);
            this.payed[i] = (bill * 1.2);
        }        
    }
}
function averageCalculator(tips)
{   var sum;    
    for(var i = 0; i < tips.length; i++)
    {
        sum =+ tips[i];   
    }
    return sum/ tips.length;     
    

   
    
}

john.calcTips();
mark.calcTips();
//averageCalculator();
//console.log(john);
//console.log(mark);
john.average = averageCalculator(john.tips);
mark.average = averageCalculator(mark.tips);
console.log(john, mark);

john.average > mark.average ? console.log(john.firstName + ' Has payed the highest amount of tips on average'): console.log(mark.firstName + ' Has payed the highest amount of tips on average')
*/

/* ################################################################
* Coding challenge 5 V1.2
*/





































