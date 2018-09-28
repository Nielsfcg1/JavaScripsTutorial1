 // Functiuon Constructor

 /*
 var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
 };

 // Function constructor starts with a constructor
 // The name of the FC is the name you give as input
 // Use this instead of creating variables as used above
 var Person = function(name, yearOfBirth, job) 
 {
    // Attaching the variables to the object
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge;
 }
    //Set the calculateAge method to the prototype of the Person object to still make it accesible. This is to prevent to have a lot of code in each function constructor of each object. 

    // Person.prototype stands for the inheritance. So setting the function to the prototype of the Person function and not directly in the Person function itself.  
    // With this you can create functions that are accessible for the objects via inheritance. They will not be attached to the object but will be reachable. So see it as things you can do, as options. For some you want to calculate the age, but not for everyone of everytime you call the function.

    Person.prototype.calculateAge = function()
    {console.log(2018-this.yearOfBirth);
    };

    Person.prototype.lastName = 'Smith';

 // First an empty object is created by the 'new' operator
 // Than the Person FC is called with the arguments specified
var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'Designer');
var mark = new Person ('Mark', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);

*/


// Object.create
// This is another way to create objects from a prototype
/*
var personProto = {
    calculateAge: function()
    {
        console.log(2018 - this.yearOfBirth);
    }
} 

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    });
*/


// Primitives vs objects
/*
var a = 23;
var b = a;
a = 11;

console.log(a,b);
*/

//////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990, 1284, 2314, 1876, 2345];

function arrCalc (arr, fn)
{
    var arrRes = [];
    for(var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//Callback function
function calculateAge(el)
{
    return 2018 - el;
}

function isFullAge(el)
{
    return el >= 18;
}

function maxHeartRate(el)
{
    if (el >= 18 && el <= 81)
    {
    return Math.round( 206.9 - (0.67 * el));
    } else { return -1}
    
}

var ages = arrCalc(years, calculateAge);
// double callback
var fullAges = arrCalc(ages, isFullAge);
var rates = arrCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

// Lecture: Functions returning functions
/*
function interviewQuestion (job)
{
    switch (job)
    {
        case ('designer'):
            return function(name)
            { console.log(name + ', Can you please explain what UX design is?');
            }
        case ('teacher'):
            return function(name)
            {console.log('What subject do you teach, ' + name);
            }
        default:
            return function(name)
            { console.log('Hello ' + name + ', what do you do?');
            }
    }
}
// generic input
var teacherQuestion = interviewQuestion('teacher');
// Specific input. Call the variable to execute the function
teacherQuestion ('John');
interviewQuestion('teacher')('John');

*/

///////////////////////////////
// Lecture: immediately invoked function expression


// Everything inside parenthesis can not be a statement/declaration but is a espression.  
// You can only call the IIFE once. Create a new scope outside the normal scope. Data privacy
/*
(
    function game (goodLuck)
    {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
    }
)   (5);
*/


////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge)
{   var a = ' years left until retirement.';
    // Use input and variable of outside function inside a anonymous function.
    return function(yearOfBirth)
    {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGER = retirement(65);
var retirementICE = retirement(67);

retirementUS(1990);
retirementGER(1990);
retirementICE(1990);
*/

// Closures zijn niet mogelijk met een switch
/*
function interviewQuestion (job)
{   //var designerQuestion = ', Can you please explain what UX design is?';
    //var teacherQuestion = 'What subject do you teach, ';
    return function (name)
    {
        switch (job)
        {
            case ('designer'):
                return function()
                { console.log(name + ', Can you please explain what UX design is?');
                }
            case ('teacher'):
                return function(name)
                {console.log('What subject do you teach, ' + name);
                }
            default:
                return function(name)
                { console.log('Hello ' + name + ', what do you do?');
                }
        }
    }    
}
// generic input
var teacherQuestion = interviewQuestion('teacher');
// Specific input. Call the variable to execute the function
teacherQuestion ('John');
interviewQuestion('teacher')('John');
*/

 
//////////////////////////////////
// Lecture: Bind, call and apply
/*
var years = [1990, 1284, 2314, 1876, 2345];

function arrCalc (arr, fn)
{
    var arrRes = [];
    for(var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//Callback function
function calculateAge(el)
{
    return 2018 - el;
}

function isFullAge(limit, el)
{
    return el >= limit;
}

var ages = arrCalc(years, calculateAge);
// execute the isFullAge function with a preset limit. Because line 233 only accepts one argument. 
var fullJapan = arrCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan, ages);
*/

////////////////////////////////////////////
// Coding challenge
(function()
{


function Question (question, answers, correct)
{   this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function()
{
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++)
    {   console.log(i + ':' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans, callback)
{   var sc;
    if (ans === this.correct)
    {   console.log('Correct Answer!');
        sc = callback(true);
    }
    else 
    {   console.log('Nope, try again!');
        sc = callback(false);
    }
    this.displayScore(sc);    
}

Question.prototype.displayScore = function(score)
{   console.log('Your current score is: ' + score); }

var q1 = new Question('ja of nee', ['ja', 'nee'], 0);
var q2 = new Question('links of rechts',['links', 'rechts'], 0);
var q3 = new Question('binnen of buiten', ['binnen','buiten'], 0);
var question = [q1, q2, q3];

function score ()
{   var sc = 0;
    return function (correct)
    {
        if(correct){sc++;}
        return sc;
    }
}
var keepScore = score();

function newQuestion()
{  
    var n = Math.floor(Math.random() * question.length);
    question[n].displayQuestion();
    var answers = prompt('Please select the correct answer');
    
    if(answers != 'exit')
    {   question[n].checkAnswer(parseInt(answers), keepScore);
        newQuestion();
    }
}

newQuestion();
})(); 








