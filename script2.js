var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementById('list').childNodes;
var theArray = [];

function putLiToArray(){
	theArray = [];
	for(var i=0;i < list.length; i++) {
    var arrValue = list[i].innerHTML;
    if((i % 2) > 0){
    	theArray.push(arrValue);
    }
}
}
function addValueToArray(adat){
	theArray.push(adat);
}
function printArrayToConsol(array1){
	for (var i = 0; i < array1.length; i++) {
	console.log(array1[i]);
	}
}
function isItIn(adat){
	var volt = false;
	for (var i = 0; i < theArray.length; i++){
		console.log(theArray[i], adat, volt);
		if ( adat === theArray[i] ){
			volt = true;
		}
	}
	return volt;
}
function inputLength(){
	return input.value.length;
}
function createListElement(){
		if (isItIn(input.value)){
			alert("Mar rajta vana a listan!!!");
		}else{
			addValueToArray(input.value);
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
		}
		console.clear();
		printArrayToConsol(theArray);
		input.value = "";
}
function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
};
function addListAfterKeypress(event){
	if (inputLength() && event.keyCode === 13)	{
	createListElement();
	}
};

putLiToArray();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
