/* A function that adds two numbers and returns the result
A function that multiplies two numbers and returns the result
A function that divides two numbers and returns the result
A function that subtracts two numbers and returns the result
Each function will have 2 parameters, num1, num2
On the console the prompt will print to the user:
Please enter your first number (store that number)
Please enter your second number (store that number)
Please enter the operation to perform: add, sub, mul, div (then store the operation)
Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
You will then print to the console: The result is: [the result]
Note the following:

The 3rd string parameter represents which of the operations you want to perform on the two numbers.

The main calculator app should do all the business logic (i.e. figuring out which operation to perform based on the string in the 3rd input) and the individual functions that perform the specific operations.

To get set up:

cd into the folder you'll be working in.
run npm install readline-sync
At the top of your JS file, include const readline = require("readline-sync")
For documentation on the readline-sync package, check out the readline-sync docs on npmjs.org

*/
const sync = require("readline-sync");
var num1 = sync.questionInt("Please enter your first number: ");
var num2 = sync.questionInt("Please enter your second number: ");
var op = sync.question("Please enter the operation to perform: add, sub, mul, div ");


function add( num1, num2){
    return num1 + num2;

}


function sub( num1, num2){
    return num1 - num2;

}


function mul( num1, num2){
    return num1 * num2;

}


function div( num1, num2){
    return num1 / num2;

}

function cal( num1, num2, op ){
    if ( op == 'add'){
        console.log("The Result Is, " + add(num1, num2));
    } else if(op == 'sub'){
        console.log( "The Result Is " + sub(num1, num2));
    } else if(op == 'mul'){
        console.log( "The Result Is " + mul(num1, num2));
    } else if(op == 'div'){
        console.log( "The Result Is " + div(num1, num2));
    } 

}

cal ( num1, num2, op)
