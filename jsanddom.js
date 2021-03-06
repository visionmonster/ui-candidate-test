     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
    }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        var _str='';
        for(var i=str.length-1;i>-1;i--){
            _str+=str.substr(i,1);
        }
        return _str;
    }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         return _.min(values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         return _.uniq(values);
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for(var i=1;i<=100;i++){
            var msg='';
            if(i%3===0&&i%5===0)msg = 'FizzBuzz';
            else if(i%3===0)msg = 'Fizz';
            else if(i%5===0)msg = 'Buzz';
            else msg = i;
            console.log(msg);
        }
    }
    doFizzBuzz();

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         return _.difference(fruits, fruitsToRemove);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         return array.concat(toPush);
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var split = (sourceStr===''||sourceStr===null)? []:sourceStr.split(',');
         return split;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var val = 0;
        for(var i = 0;i<arguments.length;i++){
            val+=arguments[i];
        }
        return val;
    }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return sourceStr.match(/^\s*$/g);
     }

     // write an example of a javascript closure
     var closure = function(){
        var _private = 'go away';
        this.public = 'hello';
    };




     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var group = {people:[{
        firstname:'matt',
        lastname:'vrtis',
        city: 'carmel',
        state:'IN',
        zip:'46032',
        phonenumbers:[
        {home:'214-867-5309'},
        {work:'214-867-5309'},
        {mobile:'214-867-5309'}
        ]
    },
    {firstname:'franklin',
    lastname:'vrtis',
    city: 'carmel',
    state:'IN',
    zip:'46032',
    phonenumbers:[
    {home:'214-867-5309'},
    {work:'214-867-5309'},
    {mobile:'214-867-5309'}
    ]
}
]};

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

     var DataTable = function(){
        var _columns = [];
        var _rows = null;
        this.getRows = function(){
            return _rows;
        };
        this.setRows = function(rows){
            _rows = rows;
        };
        this.getCols = function(){
            return _columns;
        };
        this.setCols = function(cols){
            _columns = cols;
        };
    };
    DataTable.prototype.addRow = function(){
        var _rows = this.getRows(), _columns = this.getCols();
        if(_rows===null){
            console.log('DataTable error: add columns first');
            return false;
        }
        _.each(arguments,function(element,index,list){
            _rows[_columns[index]].push(element);
        });
        this.setRows(_rows);
    };
    DataTable.prototype.addColumns = function(){
        var _columns = arguments, _rows = this.getRows();
        if(_rows===null)_rows = {};
        _.each(arguments,function(element, index, list){
            _rows[element] = [];
        });
        this.setRows(_rows);
        this.setCols(_columns);
    };
    DataTable.prototype.getData = function(){
        //json object representation of the DataTable
        //I am assuiming you want the stringfied version of the JSON object otherwise i would just return the _rows
        return JSON.stringify(this.getRows());
    };




     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     (function($,window,document,undefined){
        $.fn.divOne = function(){
            this.log = '';
            var self = this;
            return this.each(function(){

            var div1 = $(this);

             div1.append('<select name="myselect">');
            
             for(var i=0;i<10;i++){
                $('select',div1).append('<option value="'+i+'">'+i+'</option>');
            }

            div1.append('<input type="button" value="show in console" />');
            $('input',div1).on('click',function(){
                self.log = 'The select list with the name of "'+$('select',div1).attr('name')+'" has the value of '+$('select',div1).val();
               return console.log(self.log);
            });

        });
        };
    })(jQuery,window,document);
    $('#div1').divOne();


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
    console.log('five selectors:');
    console.log($('a.link'));
    console.log($('a.link',$('#foo')));
    console.log($('#foo a.link'));
    console.log($('#foo').find('a.link'));
    console.log($('div#foo.bar div#fizz.buzz a.link'));


     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
(function($,window,document,undefined){
    $.fn.listOne = function(){
        var self = this;
        this.list = [];
        return this.each(function(){
            var l1 = $(this);
            for(var i = 0; i<5;i++){
                self.list.push(Math.round(Math.random(i)*1000));
            }
            l1.append('<ul>');
            _.each(self.list,function(element,index,list){
                $('ul',l1).append('<li>'+element+'</li>');
            });
        });
    };
})(jQuery,window,document);
$('#list1').listOne();

(function($,window,document,undefined){
        $.fn.checkTheBoxes = function(){
            var self = this;
            this.cbs = '';
            this.checkAll = function(){

            };
            this.unCheckAll = function(){

            };
            return this.each(function(){
                var numCB = Math.round(Math.random(5))+3; //0-5+3 checkboxes
                var cb = null;
                var $el = $(this);

                $el.append($('<form>').append('<ul>'));
                //add random checkboxes;
                for(var i=0;i<numCB;i++){

                    $('ul',$el).append($('<li>').append($('<label>').append($('<input type="checkbox" value="'+i+'" name="'+$el.attr('id')+'" />')).append('checkbox '+i)));
                }
                $el.append($('<a href="#" class="check-all">check all</a> <a href="#" class="uncheck-all">un check all</a>'));
                $('.check-all',$el).on('click',function(){
                    $('input[type=checkbox]',$el).prop('checked',true);
                    return false; //
                });
                $('.uncheck-all',$el).on('click',function(){
                    console.log($('input[type=checkbox]',$el));
                    $('input[type=checkbox]',$el).prop('checked',false);
                    return false; //
                });
            });
        };


})(jQuery,window,document);
$("#foobar").checkTheBoxes();

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
