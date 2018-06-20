
var x = 1;
var flag = 0;
function addthing() {
    var string = document.getElementById("textarea").value;
    var add = document.createElement("li");
    add.setAttribute('id', x.toString());
    add.innerHTML = '<input type="checkbox" id=box:' + x.toString() + '>' + string;
    var newLine = document.getElementById("newone");
    newLine.appendChild(add);
    x++;
}

function selectallfun() {
    for (i = 1; i < x; i++) {
        if (document.getElementById(i.toString()) != null)
            document.getElementById("box:" + i.toString()).checked = true;
    }
}

function deselectAll() {
    for (i = 1; i < x; i++) {
        if (document.getElementById(i.toString()) != null) {
            document.getElementById("box:" + i.toString()).checked = false;
        }
    }
}

function deleteEle() {
    for (i = 1; i < x; i++) {
	 if (document.getElementById(i.toString()) != null){
        if (document.getElementById("box:" + i.toString()).checked == true) {
            var deleteElement = document.getElementById(i.toString());
            var newLine = document.getElementById("newone");
            newLine.removeChild(deleteElement);
        }
    }
}
}