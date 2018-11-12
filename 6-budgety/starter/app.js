
// BUDGET CONTROLLER
var budgetController = (function()
{   
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    

    var data = {
        allItems: {
        expense: [],
        income: [],
        },

        totals: {
            expense: 0,
            income: 0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            // Calculate the ID based on the Id of the last added item
            ID = data.allItems[type][data.allItems[type].lenght - 1].id + 1;

            // Create new item based on 'income' or 'expense' type
            if(type === "expense"){
            newItem = new Expense(ID, des, val);
            } else if (type === "income"){
            newItem = new Expense(ID,des, val);
            }

            // Push into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        testing: function(){
            console.log(data);
        }

    }


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
        var input, newItem;
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add the item to the budget controller
        var newItem = budgetController.addItem(input.type, input.description, input.value);
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