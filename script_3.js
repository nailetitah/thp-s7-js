let userAnswer = prompt("Combien d'étages aura ta pyramide ?");
let stair = "#"
let blank = " "
for (var i = 1; i <= userAnswer; i++) {
	stairs = blank.repeat(userAnswer - i) + stair.repeat(i)
	console.log(stairs)
}