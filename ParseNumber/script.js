alert('This is a simple javascript program for adding two numbers.');
var num1 = prompt('Enter the first number:');
var num2 = prompt('Enter the second number:');

//now the numbers are in string format.
//so we need to convert them to integer number first

var sum = parseInt(num1) + parseInt(num2);

document.write('The result is ' + sum);

//if we did not convert num1 and num2 then we would get wrong answer
document.write("<br>" + num1 + num2);

var sum = parseFloat(num1) + parseFloat(num2);

document.write("<br>" + 'The result is ' + sum);