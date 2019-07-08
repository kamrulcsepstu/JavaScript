//create an object first with some properties of it
var footballer = {
	name: 'Cristiano Ronaldo',
	team: 'Portugal',
	kit_number: 7,
	skills: 'heading'
};
//now lets use prop first
for(prop in footballer){
	document.write(prop + ' : ' + footballer[prop] + "<br>");
}