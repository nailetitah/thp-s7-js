let userNumber = prompt("De quel nombre veut tu calculer la factorielle ?");
let result = 1;
for (var i = 1; i <= userNumber; i++) {
	result *= i;
}
console.log(result)