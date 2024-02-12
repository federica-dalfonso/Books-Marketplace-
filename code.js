

// OUTPUT from API: array of objects
let results;
window.onload = () => {    
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((json) => {
        results = json;
        console.log(results)
        createCards(results);
    })
    .catch((err)  => console.log("Error detected: ", err));
}

// crea cards con risultati API - gestisce carrello
let bookSection = document.getElementById("bookSection"); //parent per appendere child
function createCards(results) {
    let cards = results.map(element => {
        let bookCol = document.createElement("div"); // creo COL
        bookCol.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-3");

        let bookCard = document.createElement("div"); // creo CARD
        bookCard.classList.add("card", "h-100");

        let cardImage = document.createElement("img"); // creo IMMAGINE
        cardImage.classList.add("card-img-top");
        cardImage.setAttribute("alt", "Book_Cover");
        cardImage.src = `${element.img}`;

        let cardBody = document.createElement("div"); // creo cardBody
        cardBody.classList.add("card-body");

        let bookTitle = document.createElement("h5"); // titolo libro
        bookTitle.classList.add("card-title");
        bookTitle.innerText = `${element.title}`;

        let bookDescrOne = document.createElement("p");
        bookDescrOne.classList.add("card-text");
        bookDescrOne.innerText = `${element.price} euro`;

        let bookDescrTwo = document.createElement("p");
        bookDescrTwo.classList.add("card-text");
        bookDescrTwo.innerText = `${element.category}`;

        let cardButton = document.createElement("button"); // creo bottone carrello
        cardButton.classList.add("btn", "btn-warning", "text-white", "button-cart");
        cardButton.innerText = "Add to cart";
        cardButton.addEventListener("click", (event) => { // evento che aggiunge elementi al carrello  
            
            bookCard.style.backgroundColor = "#2ecc71"; //cambio colore di sfondo alla card quando viene aggiunta

            
            let modalContent = document.getElementById("modalRow");          
            let cartCol = document.createElement("div");
            cartCol.classList.add("col-3");
            let cartContent = document.createElement("img");
            cartContent.src = `${element.img}`
            cartContent.style.width = "4em";    
            cartCol.appendChild(cartContent);
            modalContent.appendChild(cartCol);

            let modalFooter = document.querySelector("div.modal-footer .btn-warning");
            modalFooter.classList.remove("d-none");
        })

        // Appendo gli elementi
        bookCol.appendChild(bookCard); // appendo CARD a COL
        bookCard.appendChild(cardImage); // appendo IMMAGINE a CARD
        bookCard.appendChild(cardBody); // appendo cardBody a CARD
        cardBody.appendChild(bookTitle); // appendo titolo libro a cardBody
        cardBody.appendChild(bookDescrOne); // appendo descrizione libro a cardBody
        cardBody.appendChild(bookDescrTwo); // appendo descrizione libro a cardBody
        cardBody.appendChild(cardButton); // appendo bottone carrello a FOOTER

        return bookCol;
    });
    bookSection.append(...cards); // appendo tutti gli elementi COL a bookSection
}

// funzione ricerca: 
let searchBtn = document.getElementById("searchButton"); 
searchBtn.addEventListener("click", (event) => {
    let searchValue = document.getElementById("searchField").value;
    searchValue = searchValue.toLowerCase();
    let filtered = results.filter((res) => 
        res.title.toLowerCase().includes(searchValue));
        console.log(filtered)
        bookSection.innerHTML = "";
        createCards(filtered);
    }
)
