
// BUDGET CONTROLLER
var budgetController = (function()
{   
    //some code

})();
// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
return{
    getInput: function() {

        return {
            type: document.querySelector(DOMstrings.inputType).value, // Can be income or expense
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
        }
       
    },
    getDOMStrings: function() {
        return DOMstrings;
    }

};

})();
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){


    var setupEventLiteners = function()
    {
        var DOM = UIController.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.key === 13 || event.which ===13){
            ctrlAddItem();
        }
    });
};
    

    var ctrlAddItem = function() {
        
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. add the item to the budget controller

        // 3. add the item to the UI

        // 4. calculate the budget

        // 5. display the budget on the UI
    };
    
    return {
        init: function(){
            console.log('testing');
            setupEventLiteners();
        }
    }

    

})(budgetController, UIController);

controller.init();