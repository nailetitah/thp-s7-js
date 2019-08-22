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
var orderedBooks = []

for (let bookAttribut in books) {
  let bookRented = books[bookAttribut].rented
  let bookTitle = books[bookAttribut].title
  let bookId = books[bookAttribut].id
  
  // 1
  result *= bookRented

  // 2 
  arr.push(bookRented)
  let l = arr.length - 1
  let most = arr.sort()[l]
  if(bookRented === most) {
    mostRented = bookTitle
  }


  // 3
  let less = arr.sort()[0]
  if(bookRented === less) {
    lessRented = bookTitle
  }

  // 4 
  if(bookId === 873495) {
    title873495 = bookTitle 
  }

  // 5 
  if(bookId === 133712) {
    book133712 = books.indexOf(books[bookAttribut]) 
  }

  // 6
  orderedBooks.push(books[bookAttribut])
  
  
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
console.log(orderedBooks)