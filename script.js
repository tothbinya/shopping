
var buttonadd = document.getElementById("add");
var data = document.getElementById("adat");
var ul = document.querySelector("ul");



function inputLenght(){
	return data.value.length;
};


function createListElement(){
	var li = document.createElement("li");
	li.classList.add("listItem");
	
	li.appendChild(document.createTextNode(data.value));
	ul.appendChild(li);
	data.value ="";
	
	li.addEventListener("click",markListItem);
	
	function markListItem() {
		li.classList.toggle("done");
	}
	var btnDel = document.createElement("button");
	btnDel.classList.add("deleteBtn");
	btnDel.appendChild(document.createTextNode("Del"));
	li.appendChild(btnDel);

	btnDel.addEventListener("click", deleteListItem);

	function deleteListItem() {
		console.log("delete");
		li.classList.add("delete");
	}
};


function addListAfterClick(){
	if (inputLenght() > 0 ){
		createListElement();
	}
};

function addListAfterEnter(){
	if (inputLenght() > 0 && event.keyCode === 13){
		createListElement();
	}
};


buttonadd.addEventListener("click", addListAfterClick);
data.addEventListener("keypress", addListAfterEnter);

