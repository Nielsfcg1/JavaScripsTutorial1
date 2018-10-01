
//BUDGET CONTROLLER
var budgetcontroller = (function()
{   

})();

// UI CONTROLLER
var UIController = (function()
{
    var DOMstrings = 
    {   inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    }

    return {
           getInput: function()
            {   return {
                type: document.querySelector(DOMstrings.inputType).value,
                // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };       
        },
        getDOMstrings: function()
        {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl)
{   var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function()
    {   // 1. Get field input data
        var input = UICtrl.getInput();
        console.log(input);
         
        // 2. add the item to the buget controller
        // 3. add the item to the UI
        // 4. calculate the budget
        // 5. display the budget 
        
    }
    
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
 
 


document.addEventListener("keypress", function(event)
{
    if(event.keyCode === 13 || event.which === 13)
    {ctrlAddItem();}
});



})(budgetcontroller, UIController);

































