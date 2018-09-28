 // Functiuon Constructor

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




// Object.create
/*
var personProto = 
{  calculateAge: function()
    {
        console.log(2018 - this.yearOfBirth);
    }
};

var piet = Object.create(personProto);
piet.name = 'Piet';
piet.yearOfBirth = 1990;
piet.job = 'Teacher';

var jane = Object.create(personProto, 
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });

*/

// Primitives vs objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;

// a = 46, b = 23
// here there is a copy made
console.log(a, b);

// Objects
var obj1 =
{
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
// obj 1 & obj2 = 30
// here there is a link created without making a new object
console.log(obj1.age, obj2.age);

// Functions
var age = 27;
var obj = 
{   name: 'Jonas',
    city: 'Lisabon'
};

function change(a, b)
{
    a = 30;
    b.city = 'San Francisco'
}

change(age,obj);

console.log(age, obj.city);
*/

//////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el)
{
    return el >= 18;
}

function calcHeartRate(el)
{
    return 220 - el;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeartRate = arrayCalc(ages, calcHeartRate);
console.log(ages);
console.log(fullAges);
console.log(maxHeartRate);

*/

// Lecture: Functions returning functions
/*
function interviewQuestions (job)
{
    if (job === 'designer')
    {
        return function(name)
        {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher')
    {
        return function(name)
        {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else
    {
        return function(name)
        {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQeustion = interviewQuestions('designer');
// Roep de variabele aan die de functie aanroept
teacherQuestion('John');
designerQeustion('John');
*/

///////////////////////////////
// Lecture: immediately invoked function expression

/*
function game ()
{
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/
// In  this way there is no interference and is the data private. It can not be accessed by the outside
/*
( function(goodLuck)
{   var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}
//Here you input the value of goodLuck
)(5);
*/

////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge)
{
    return function (yearOfBirth)
    {   
        var a = ' years left until retirement';
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
var retirementNL = retirement(67);

retirementUS(1990);
retirementNL(1960);
*/

/*
function interviewQuestions (job)
{
    return function (name)
    {
        
        if (job === 'designer')
        {  console.log(name + ', can you please explain what UX design is?');
        }
        else if (job === 'teacher')
        {  console.log('What subject do you teach, ' + name + '?');   
        }
        else
        {  console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQeustion = interviewQuestions('designer');
// Roep de variabele aan die de functie aanroept
teacherQuestion('John');
designerQeustion('John');
*/

//////////////////////////////////
// Lecture: Bind, call and apply
/*

var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function(style, timeOfDay)
    {
        if(style === 'formal')
        {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlement! I\'m ' + 
            this.name + ' I\'m a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' Years old.');
        } 
        else if(style === 'friendly')
        {
            console.log('Hey! What\'s up? I\'m ' +
            this.name + ' I\'m a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' Years old. Have a nice '
            + timeOfDay);
        }
    }
}

var emily =
{
    name: 'Emily',
    age: 35,
    job: 'Designer'
};

john.presentation('formal', 'morning');
// Met de call functie verander je de 'this' element
john.presentation.call(emily, 'friendly', 'afternoon');
// Met de apply functie gebeurt hetzelfde, alleen wordt er een array verwacht
//john.presentation.apply(emily, ['friendly', 'afternoon']);
// Met de bind functie maak je een kopie van de functie zoodat deze wordt opgeslagen. Handig voor een functie met preset arguments
var jonhFriendly = john.presentation.bind(john, 'friendly');

jonhFriendly('morning');
// Dit noem je carrying. Een functie maken gebaseerd op een andere functie met preset parameters 


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit,el)
{
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


////////////////////////////////////////////
// Coding challenge
 /*
var questionOne =
{   question: 'Question one',
    Answers: [1,2,3],
    correctAnswer: 2,
};

var question = function(q, answer, corrAnswer)
{
    //var questionArr = [ 'Question one', 'Question two', 'Question three'];

    if(q === 0)
    {
        //questionVar === 0
    }
    else if (q ===1)
    {
        //questionVar === 1
    }
    else if (q === 3)
    {
        //QuestionVar === 2
    }
    return questionArr[Math.floor(Math.random()*3)];
}

var test = question(0,0,0);

console.log(test);
*/
// Constructor
/*
function Question (question, answers, correct)
{
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function()
{
    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++)
    {
        console.log(i + ':' + this.answers[i]);
    }
}
// Instances of the constructor
var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);

var q2 = new Question('What is the name of this course\'s teacher?', ['John','Michael', 'Jonas'],2);

var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

*/
















