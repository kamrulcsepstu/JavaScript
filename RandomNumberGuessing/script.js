alert('This is a simple javascript program to guess a random number between 1 and 10');
var randomNumber = Math.floor(Math.random() * 10 +1);

var guess = prompt('Guess the random number.What can it be?')

if(parseInt(guess) == randomNumber){
	document.write('Congratulations!! you have gueesed the right number!!')
}
else{
	document.write('Oops!! your guess is not correct! The random number is ' + randomNumber);
}