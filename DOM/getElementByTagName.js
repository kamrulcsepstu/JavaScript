const myList = document.getElementsByTagName('li');
const txt_input = document.getElementById('text_input');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
	for(let i=0; i<myList.length; i++){
		myList[i].style.color = txt_input.value;
	}
	txt_input.value = null;
});