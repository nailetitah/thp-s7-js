// script 1
function script1() {
	// console.log("Bonjour monde");
	let firstName = prompt("Quel est ton prénom ?");
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

// Script 4
function script4() {
	const entrepreneurs = [
	  { first: 'Steve', last: 'Jobs', year: 1955 },
	  { first: 'Oprah', last: 'Winfrey', year: 1954 },
	  { first: 'Bill', last: 'Gates', year: 1955 },
	  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
	  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
	  { first: 'Beyonce', last: 'Knowles', year: 1981 },
	  { first: 'Jeff', last: 'Bezos', year: 1964 },
	  { first: 'Diane', last: 'Hendricks', year: 1947 },
	  { first: 'Elon', last: 'Musk', year: 1971 },
	  { first: 'Marissa', last: 'Mayer', year: 1975 },
	  { first: 'Walt', last: 'Disney', year: 1901 },
	  { first: 'Larry', last: 'Page', year: 1973 },
	  { first: 'Jack', last: 'Dorsey', year: 1976 },
	  { first: 'Evan', last: 'Spiegel', year: 1990 },
	  { first: 'Brian', last: 'Chesky', year: 1981 },
	  { first: 'Travis', last: 'Kalanick', year: 1976 },
	  { first: 'Marc', last: 'Andreessen', year: 1971 },
	  { first: 'Peter', last: 'Thiel', year: 1967 }
	];

	var seventiesEntrepreneurs = ""
	var arrFirstAndLast = []
	var ageEntrepreneurs = ""
	var yearToday = new Date().getFullYear()
	var byName = entrepreneurs.slice(0)

	for (let entrepreneurAttribut in entrepreneurs) {
	  let entrepreneurYear = entrepreneurs[entrepreneurAttribut].year
	  let entrepreneurFirst = entrepreneurs[entrepreneurAttribut].first
	  let entrepreneurLast = entrepreneurs[entrepreneurAttribut].last
	  let entrepreneurAge = yearToday - entrepreneurYear

	  // Entrepreneur nés dans les années 70
	  if(entrepreneurYear >= 1970 && entrepreneurYear < 1980 )  {
	    seventiesEntrepreneurs += entrepreneurFirst + " " + entrepreneurLast + " (" + entrepreneurYear + ") \n"
	  } 

	  // Array avec prénoms et noms
	  arrFirstAndLast.push(entrepreneurFirst + " " + entrepreneurLast)
	  

	  // Âge aujourd'hui
	  ageEntrepreneurs += entrepreneurFirst + " " + entrepreneurLast + " aurait cette année " + entrepreneurAge  + " ans" + "\n"

	}

	// 1 
	console.log("1. Entrepreneurs nés dans les années 70")
	console.log(seventiesEntrepreneurs)

	// 2
	console.log("2. Array avec prénom et nom des entrepreneurs")
	console.log(arrFirstAndLast)

	// 3 
	console.log("3. Âge de chaque inventeur aujourd'hui")
	console.log(ageEntrepreneurs)

	// 4 
	console.log("4. Entrepreneurs triés par ordre alphabétique du nom de famille")
	byName.sort(function(a,b) {
	    var x = a.last.toLowerCase();
	    var y = b.last.toLowerCase();
	    return x < y ? -1 : x > y ? 1 : 0;
	});
	console.log(byName)
}

// Script 5
function script5() {
	const books = [
	  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
	  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
	  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
	  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
	  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
	  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
	  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
	  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
	  { title: 'La disparition', id: 364445, rented: 33 },
	  { title: 'La lune seule le sait', id: 63541, rented: 43 },
	  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
	  { title: 'Guerre et Paix', id: 748147, rented: 19 }
	];

	var result = 1
	var arr = []
	var mostRented
	var lessRented 
	var title873495
	var book133712

	for (let bookAttribut in books) {
	  let bookRented = books[bookAttribut].rented
	  let bookTitle = books[bookAttribut].title
	  let bookId = books[bookAttribut].id
	  
	  // Livres ont été au moins empruntés une fois
	  result *= bookRented

	  // livre le plus emprunté 
	  arr.push(bookRented)
	  let l = arr.length - 1
	  let most = arr.sort()[l]
	  if(bookRented === most) {
	    mostRented = bookTitle
	  }

	  // livre le moins emprunté 
	  let less = arr.sort()[0]
	  if(bookRented === less) {
	    lessRented = bookTitle
	  }

	  // Livre avec l'id 873495
	  if(bookId === 873495) {
	    title873495 = bookTitle 
	  }

	  // Supprimer livre avec l'id 133712
	  if(bookId === 133712) {
	    book133712 = books.indexOf(books[bookAttribut]) 
	  }
	  
	}

	// 1
	console.log("1. Est-ce que tous les livres ont été au moins empruntés une fois ?")
	if(result > 0) {
	  console.log("> " + "Oui") 
	} else {
	  console.log("> " + "Non")
	}

	// 2
	console.log("2. Quel est livre le plus emprunté ?")
	console.log("> " +mostRented)

	// 3
	console.log("3. Quel est livre le moins emprunté ?")
	console.log("> " + lessRented)

	// 4
	console.log("4. Le livre avec l'ID: 873495")
	console.log("> " + title873495)

	// 5 
	console.log("5. Suppression du livre avec l'ID: 133712")
	console.log(books[book133712])
	books.splice(books[book133712],1)
	console.log(books)

	// 6 
	console.log("6. Livres triés par ordre alphabétique")
	var byTitle = books.slice(0) 
	byTitle.sort(function(a,b) {
	  var x = a.title.toLowerCase();
	  var y = b.title.toLowerCase();
	  return x < y ? -1 : x > y ? 1 : 0;
	});
	console.log(byTitle)
}

function script6() {
	function getAcids(arn) {
		var rawArn = arn
		var l = rawArn.length
		var multiple = 3
		var cut = cut = l / multiple
		arrArn = []
		for (var i = 0; i < cut; i++) {
		  arrArn.push(rawArn.slice((multiple * i),(multiple * (i +1))))
		}
		var formatedArn = arrArn.join("-")
		var acids = []

		console.log("L'ARN " + formatedArn + " correspond à :")

		for(let index in arrArn) {
			switch (arrArn[index]) {
				case "UCU":
				case "UCC":
				case "UCA": 
				case "UCG": 
				case "AGU": 
				case "AGC":
				acids.push("Sérine")
				break;
				case "CCU": 
				case "CCC": 
				case "CCA": 
				case "CCG":
				acids.push("Proline")
				break;
				case "UUA": 
				case "UUG":
				acids.push("Leucine")
				break;
				case "UUU":
				case "UUC":
				acids.push("Phénylalanine")
				break;
				case "CGU":
				case "CGC":
				case "CGA": 
				case "CGG": 
				case "AGA": 
				case "AGG":
				acids.push("Arginine")
				break;
				case "UAU": 
				case "UAC":
				acids.push("Tyrosine")
				break;
			} 
		}
		var formatedAcids = acids.join("-")
		console.log(formatedAcids)
	}

	getAcids("CCGUCGUUGCGCUACAGC")
	getAcids("CCUCGCCGGUACUUCUCG")

}

// PERFORM 
function perform(script) {
	console.log("Voici le résultat du script " + script)
	console.log("-----------------------------")
	switch (script) {
		case "1":
		script1();
		break;
		case "2":
		script2();
		break;
		case "3":
		script3();
		break;
		case "4":
		script4();
		break;
		case "5":
		script5();
		break;
		case "6":
		script6();
		break;
		default:
    	console.log("Fais ton choix entre 1 et 6.");
	}
}
var userChoice = prompt("Quel script souhaites-tu lancer ?");
perform(userChoice)
console.log("--------------------------------------------------")
console.log("Rafraîchis la page pour lancer un nouveau script !")
console.log("--------------------------------------------------")

	