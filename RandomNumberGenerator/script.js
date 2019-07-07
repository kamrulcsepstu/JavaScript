alert('This is a simple javascript program to generate random number for a range you will give.');
var num1 = prompt('Enter smalest number:');
var num2 = prompt('Enter largest number:');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1 ;
document.write(randomNumber + ' is a random number between ' + num1 + ' and ' + num2);