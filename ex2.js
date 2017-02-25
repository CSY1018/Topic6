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

function myLoadEvent() {
        var buttons = document.getElementsByTagName('button');

        for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', drawNumbers);
        }
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
