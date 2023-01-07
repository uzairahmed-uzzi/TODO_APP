var list = document.getElementById("list");

function adding() {
    var input = document.getElementById("input");
    var add = document.getElementById("add");
    var remove = document.getElementById("remove");

    var li = document.createElement("li");
    li.setAttribute("class", "listelements");


    var btn = document.createElement("button");
    btn.innerHTML = "DELETE";
    btn.setAttribute("onclick", "dellist(this)");


    var btn1 = document.createElement("button");
    btn1.innerHTML = "EDIT";
    btn1.setAttribute("onclick", "editlist(this)");
    var text = document.createTextNode(input.value);

    li.appendChild(text);
    li.appendChild(btn);
    li.appendChild(btn1);
    list.appendChild(li);
    input.value = "";

}

function deleting() {
    var input = document.getElementById("input");
    var add = document.getElementById("add");
    var remove = document.getElementById("remove");
    list.innerHTML = "";
}

function dellist(e) {

    e.parentNode.remove();
}

function editlist(f) {
    var a = f.parentNode.firstChild.nodeValue;
    console.log(a);
    var b = prompt("EDIT VALUE", a);
    f.parentNode.childNodes[0].nodeValue = b;

}