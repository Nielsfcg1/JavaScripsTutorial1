 // Functiuon Constructor
/*
 var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
 };

 // Function constructor starts with a constructor
 // The name of the FC is the name you give as input
 var Person = function(name, yearOfBirth, job) 
 {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge;
 }
 
    Person.prototype.calculateAge = function()
    {console.log(2018-this.yearOfBirth);
    };

 // First an empty object is created by the 'new' operator
 // Than the Person FC is called with the arguments specified
var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'Designer');
var mark = new Person ('Mark', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

*/


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






























