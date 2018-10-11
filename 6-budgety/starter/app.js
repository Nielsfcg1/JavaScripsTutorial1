
//BUDGET CONTROLLER
var budgetcontroller = (function()
{  
    var Expense = function(id, description, value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function(id, description, value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    
    var data = {
        allItems: {
            expense: [],
            income: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    }

    return {
        addItem: function(type, des, val) {
            var newItem;
            // Create new ID
            if(data.allItems[type].length >0){
            ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            // create new item based on 'income' or 'expenses' type
            if  (type === 'expense'){
                newItem = new Expense(ID, des, val);
            }   else if (type === 'income'){
                newItem = new Income(ID, des, val);
            }
            // push it into our data structure
            data.allItems[type].push(newItem);
            return newItem;
        },

        testing: function()
        {   console.log(data);

        }
    }

})();


// UI CONTROLLER
var UIController = (function()
{
    var DOMstrings = 
    {   inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
    }

    return {
           getInput: function()
            {   return {
                type: document.querySelector(DOMstrings.inputType).value,
                // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };       
        },

        addListItem: function(obj, type)
        {   var html, newHTML, element;
            // Create html string with placeholder text
            if(type === 'income'){
                element = DOMstrings.incomeContainer;
                    html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if (type === 'expense'){
                element = DOMstrings.expensesContainer;
                     html =  '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace placeholder text with actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);

            //  Insert the html into the DOM
            // is income or expense container
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
        },

        clearFields: function()
        {   var fields, fieldsArr;
        
            // This works like CSS selection, so seperation by a comma as a string
            var fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            // queryselectorAll returns a list, but we have to return it as a array. By using the 'slice' method which returns a copy of a array.
            var fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(curr, index, array)  {
            curr.value = "";                
            });
            // Put the cursor back on the first field
            fieldsArr[0].focus();
        },

        getDOMstrings: function()
        {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl)
{   
    setupEventListeners = function()
    {   var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener("keypress", function(event)
        {   if(event.keyCode === 13 || event.which === 13)
            {ctrlAddItem}
        })
    }

    var updateBuget = function()
    {   // 5. calculate the budget
        // return the budget
        // 6. display the budget

    }
    

    var ctrlAddItem = function()
    {   
        var input, newItem;

        // 1. Get field input data
        var input = UICtrl.getInput();
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0)
        {
            // 2. add the item to the buget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. add the item to the UI
            UIController.addListItem(newItem, input.type);
            // 4. clear the fields
            UICtrl.clearFields();

            // 5. Calculate and uppdate budget
            updateBuget();
        }   
    }

    return {
        init: function()
        {
            console.log('Application has started');
            setupEventListeners();
        }
    }

})(budgetcontroller, UIController);

controller.init();































