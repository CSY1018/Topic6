function drawNumbers() {
	var tableCells = this.parentNode.getElementsByTagName('td');

	for (var i = 0; i < tableCells.length; i++) {
		var randomNumber = Math.ceil(Math.random() * 49);
		tableCells[i].firstChild.nodeValue = randomNumber;
	}
}

function myLoadEvent() {
	var buttons = document.getElementsByTagName('button');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', drawNumbers);
	}
}

document.addEventListener('DOMContentLoaded', myLoadEvent);