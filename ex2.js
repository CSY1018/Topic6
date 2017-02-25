function drawNumbers() {
        
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        table.appendChild(tr);

        for (var i = 0; i < 6; i++) {
                var randomNumber = Math.ceil(Math.random() * 49);
                var td = document.createElement('td');
                var textNode = document.createTextNode(randomNumber);
                td.appendChild(textNode);
                tr.appendChild(td);             
        }

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
