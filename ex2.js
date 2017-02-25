var tr;
var animateTimeout;
var nextTimeout;

function nextNumber() {
	if (tr.getElementsByTagName('td').length < 6) {
		var randomNumber = Math.ceil(Math.random() * 49);
		var td = document.createElement('td');
		var textNode = document.createTextNode(randomNumber);
		td.appendChild(textNode);
		tr.appendChild(td);
	}
	else {
		clearInterval(animateTimeout);
		clearInterval(nextTimeout);
	}
}

function animateNext() {
	var tds = tr.getElementsByTagName('td');
	var currentTd = tds[tds.length-1];
	var randomNumber = Math.ceil(Math.random() * 49);
	currentTd.firstChild.nodeValue = randomNumber;
}

function drawNumbers() {
	
	var table = document.createElement('table');
	tr = document.createElement('tr');
	table.appendChild(tr);
	nextNumber();

	animateTimeout = setInterval(animateNext, 100);
	nextTimeout = setInterval(nextNumber, 1000);

	this.parentNode.appendChild(table);
}

function clear() {
	var tables = this.parentNode.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		tables[i].parentNode.removeChild(tables[i]);
		i--;
	}
}

function myLoadEvent() {
	var divs = document.getElementsByTagName('div');

	for (var i = 0; i < divs.length; i++) {
		var buttons = divs[i].getElementsByTagName('button');
		buttons[0].addEventListener('click', drawNumbers);
		buttons[1].addEventListener('click', clear);
	}
}

document.addEventListener('DOMContentLoaded', myLoadEvent);