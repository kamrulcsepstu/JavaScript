const text_input = document.getElementById('txt_box');
const button = document.getElementById('btn');
const heading = document.getElementById('heading');
button.addEventListener('click', () =>{
	heading.style.color = text_input.value;
	text_input.value = null;
});