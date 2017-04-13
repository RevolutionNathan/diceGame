"use strict;"

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function newDiv() {
    var newDiv = document.createElement("div");
    newDiv.id = "drag1";
    newDiv.className = "drag1";
    var x = document.getElementById('drag1');
    var t = document.createTextNode("This is a paragraph.");
    newDiv.appendChild(t);
    document.getElementById("div1").appendChild(newDiv);
    //x.insertBefore(newDiv, x.firstChild);
}