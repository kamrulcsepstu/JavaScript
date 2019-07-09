const myButton = document.getElementById('btn');
const myList = document.querySelector('.list');

myButton.addEventListener('click', () =>{
	if(myList.style.display == 'none'){
		//myButton.textContent = ;
		myList.style.display = 'block';
	}
	else{
		//myButton.textContent = 'Show';
		myList.style.display = 'none';
	}
});