//USER SETTINGS/////////////////////////////////////////////////////////////////////////////////////

var userNameElement = document.getElementById("userNameElement");
var userName = localStorage.getItem("username");

function submitUsername(){
	var newName = valueGrabber.value;
	userNameElement.innerHTML = newName;
	localStorage.setItem('username', newName);
}

if(userName){
	userNameElement.innerHTML = userName;
}else {
	userNameElement.innerHTML = '<input type="text" placeholder="name" id="valueGrabber"></input><button onclick="submitUsername()">Submit Username</button>';
	var valueGrabber = document.getElementById("valueGrabber");
}



////////////////////////////////////////////////////////////////////////////////////////////////////


//NOTES/////////////////////////////////////////////////////////////////////////////////////////////

var notes = localStorage.getItem("notes");
var noteInput = document.getElementById("noteInput");
var noteElement = document.getElementById("noteElement");

var clearNotesButton = document.getElementById('clearNotes');

if(notes){
	noteElement.innerHTML = notes;
}

function updateNotes(note){
	noteElement.innerHTML += note + "<br>";
	localStorage.setItem('notes', noteElement.innerHTML);
	
	noteInput.value = '';
};
function clearNotes(){
	noteElement.innerHTML = '';
	localStorage.removeItem('notes');
	updateNotes(' ');
};

noteInput.onchange = function(){
	updateNotes(noteInput.value);
};

clearNotesButton.onmouseover = function(){
	clearNotesButton.style.backgroundColor = "#FF7777";
	clearNotesButton.style.border = "1px dotted black";
};
clearNotesButton.onmouseout = function(){
	clearNotesButton.style.backgroundColor = "white";
};
clearNotesButton.onclick = function(){
	clearNotes();
};


////////////////////////////////////////////////////////////////////////////////////////////////////


//BACKGROUND COLOR /////////////////////////////////////////////////////////////////////////////////
var storedBGColor = localStorage.getItem("backgroundColor");

if(storedBGColor) {
	document.body.style.backgroundColor = storedBGColor;
};

function setBackgroundColor(color){
	document.body.style.backgroundColor = color;
  localStorage.setItem("backgroundColor", color);
};

const colorPickerElement = document.getElementById("colorPicker");
colorPickerElement.value = document.body.style.backgroundColor;

colorPickerElement.onchange = function(){
	setBackgroundColor(colorPickerElement.value);
};
////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(localStorage);