
function buttonClick() {
	var colourArray = [];
	colourArray[0] = 'red';
	colourArray[1] = 'blue';
	colourArray[2] = 'green';
	colourArray[3] = 'yellow';
	colourArray[4] = 'cyan';
	colourArray[5] = 'black';

	var element = document.createElement('div');

	var randomNumber = Math.floor(Math.random() * 6);
	element.style.backgroundColor = colourArray[randomNumber];

	var borderArray = [];
	borderArray[0] = 'solid';
	borderArray[1] = 'dashed';
	borderArray[2] = 'dotted';

	var randomBorder = Math.floor(Math.random() * 3);
	var randomSize = Math.floor(Math.random() * 15);
	var randomColour = Math.floor(Math.random() * 6);

	element.style.border = randomSize + 'px ' + borderArray[randomBorder] + ' ' + colourArray[randomColour];

	var body = document.getElementsByTagName('body')[0];
	body.appendChild(element);
}

function myLoadEvent() {
	var elements = document.getElementsByTagName('button');
	elements[0].addEventListener('click', buttonClick);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);

