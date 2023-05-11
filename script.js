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
    var text = document.createElement("p");
    text.setAttribute("class","texts");
    text.innerText=input.value;
    

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
    const val = f.parentNode.firstChild.firstChild.nodeValue;
    
    if(val!=HTMLElement){
    takeInput(f,val);
}
    
}
 function takeInput(f,val){
    f.parentNode.innerHTML=`<input type="texts" class="input update-input" value="${val}"> <button class="updatebuttons" onclick="update(this,'${val}')">UPDATE</button><button class="updatebuttons" onclick="update(this,'${val}')">CANCEL</button>`;
}
function update(f,pval){    
    const val=f.parentNode.firstChild.value;
    if (val!=pval){
    f.parentNode.innerHTML=`<p class="texts">${val}</p><button onclick="editlist(this)">EDIT</button><button onclick="dellist(this)">DELETE</button>`;
    }
    else{
    f.parentNode.innerHTML=`<p class="texts">${pval}</p><button onclick="editlist(this)">EDIT</button><button onclick="dellist(this)">DELETE</button>`;
    }
}
