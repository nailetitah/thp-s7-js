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


