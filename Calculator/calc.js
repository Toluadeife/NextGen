// document.body.style.backgroundColor = 'Blue';
const display = document.getElementById(`display`);

function addNumber(input){
	display.value += input
};

function clearDisplay(){
	display.value = "" ;
}
function calculate(){
	try {
		display.value = eval(display.value)

	} catch (error) {
		display.value = "Maths Error";
	}
}
function deleteText(){
	display.value = display.value.slice (0, -1) //-1 is for deleting one digit
}