let numberOfClicks = 0;

function buttonClicked(){
	
	numberOfClicks += 1;

	// select the element we want to modify
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = "Number of times button clicked: " + numberOfClicks;s