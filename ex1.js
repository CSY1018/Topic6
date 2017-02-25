
function linkClick() {
	var colourArray = [];
	colourArray[0] = 'red';
	colourArray[1] = 'blue';
	colourArray[2] = 'green';
	colourArray[3] = 'yellow';
	colourArray[4] = 'cyan';
	colourArray[5] = 'black';

	var elements = document.getElementsByTagName('div');

	var randomNumber = Math.floor(Math.random() * 6);
	elements[0].style.backgroundColor = colourArray[randomNumber];

	var borderArray = [];
	borderArray[0] = 'solid';
	borderArray[1] = 'dashed';
	borderArray[2] = 'dotted';

	var randomBorder = Math.floor(Math.random() * 3);
	var randomSize = Math.floor(Math.random() * 15);
	var randomColour = Math.floor(Math.random() * 6);

	elements[0].style.border = randomSize + 'px ' + borderArray[randomBorder] + ' ' + colourArray[randomColour];
}

function myLoadEvent() {
	var elements = document.getElementsByTagName('a');
	elements[0].addEventListener('click', linkClick);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);

