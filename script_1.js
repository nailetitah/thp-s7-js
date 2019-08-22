/* MENU 
function perform() {
var userChoice = prompt("Quel script souhaites-tu lancer ?");
return userChoice	
}

perform()
*/

// script 1
function script1(){
	// console.log("Bonjour monde");
	let firstName = prompt("Quel est ton prénom");
	let welcomeMessage = `Bonjour ${firstName}`;
	console.log(welcomeMessage);
}

// Script 2 
function script2() {
	let userNumber = prompt("De quel nombre veut tu calculer la factorielle ?");
	let result = 1;
	for (var i = 1; i <= userNumber; i++) {
		result *= i;
	}
	console.log(result)
}

// Script 3 
function script3() {
	let userAnswer = prompt("Combien d'étages aura ta pyramide ?");
	let stair = "#"
	let blank = " "
	for (var i = 1; i <= userAnswer; i++) {
		stairs = blank.repeat(userAnswer - i) + stair.repeat(i)
		console.log(stairs)
	}
}

	