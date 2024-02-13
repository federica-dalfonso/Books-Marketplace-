// API output: array of objects

// GLOBAL VAR
let urlBooks = "https://striveschool-api.herokuapp.com/books";

// NODES:
// nodo parent sezione cards:
let bookSection = document.getElementById("bookSection");
// nodo input ricerca:
// let searchBtn = document.getElementById("searchButton"); 

// init variabile per response fetch
let results; 

// fetch:
window.onload = () => {
    fetch(urlBooks)
    .then((response) => response.json())
    .then((json) => {
        results = json;
        console.log(results)
        createCards(results);
    })
    .catch((err)  => console.log("Error detected: ", err));
}

// funzione che crea le cards:
function createCards (results) {
    let cards = results.map((book) => {
        //creo COL: 
        let sectionCol = document.createElement("div"); // creo COL
        sectionCol.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-3");

        //creo CARD:
        let card = document.createElement("div"); 
        card.classList.add("card", "border-0", "shadows");

        //creo IMG:
        let cover = document.createElement("img");
        cover.classList.add("card-img-top");
        cover.setAttribute("alt", "Book_cover");
        cover.src = `${book.img}`;

        //creo BODY:
        let body = document.createElement("div"); // creo cardBody
        body.classList.add("card-body");

        //creo elementi testuali:
        let title = document.createElement("p");
        title.classList.add("card-title", "h5", "title-ellipsis");
        title.innerText = `${book.title}`;

        let detail = document.createElement("p");
        detail.classList.add("card-title", "h6", "fw-light");
        detail.innerText = `${book.price} €`

        let description = document.createElement("p");
        description.classList.add("card-text", "mb-1", "ellipsis");
        description.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A laboriosam rem, odio quae dolorem";

        // creo LINK:
        let anchor = document.createElement("a");
        anchor.classList.add("d-block", "pb-3", "link-secondary");
        // anchor href con dato che serve per nuovo esercizio - onclick
        anchor.innerText = "Read more";

        //creo BOTTONI
        let buttonBox = document.createElement("div");
        buttonBox.classList.add("d-flex", "justify-content-center", "mb-3");

        // cart button
        let buyBtn = document.createElement("button");
        buyBtn.classList.add("btn", "btn-warning", "text-white", "me-3");
        buyBtn.addEventListener("click", (event) => {
            card.classList.add("added-cart"); // cambia colore di sfondo dell'elemento aggiunto al carrello
            addCart(book);
        });
        buyBtn.setAttribute("id", "buyButton");
        buyBtn.innerText = "Buy now";
        // icon:
        let buyBtnIcon = document.createElement("i");
        buyBtnIcon.classList.add("fa", "fa-cart-plus", "ps-1");

        // remove button
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-danger", "text-white");
        removeBtn.setAttribute("id", "removeButton");
        removeBtn.innerText = "Remove"
        // icon:
        let removeBtnIcon = document.createElement("i");
        removeBtnIcon.classList.add("fa", "fa-times", "ps-1");

        //APPENDO GLI ELEMENTI:
        sectionCol.appendChild(card);
        card.appendChild(cover);
        card.appendChild(body);
        body.appendChild(title);
        body.appendChild(detail);
        body.appendChild(description);
        body.appendChild(anchor);
        card.appendChild(buttonBox);
        buttonBox.appendChild(buyBtn); 
        buttonBox.appendChild(removeBtn);
        buyBtn.appendChild(buyBtnIcon);
        removeBtn.appendChild(removeBtnIcon); 
        
        return sectionCol;
    })
    bookSection.append(...cards);
}

// funzione che aggiunge prodotto al carrello:
function addCart (book) {
    let emptyMessage = document.querySelector("#modalRow span.fw-lighter");
    emptyMessage.classList.add("d-none");

    let modalRow = document.getElementById("modalRow");
    
    let modalCol = document.createElement("div");
    modalCol.classList.add("col-12");

    let bookList = document.createElement("ul");
    bookList.classList.add("ps-0")

    let bookItems = document.createElement("li");
    let bookBox = document.createElement("div");
    bookBox.classList.add("d-flex", "justify-content-between");
    let bookPrevTitle = document.createElement("p");
    bookPrevTitle.classList.add("h6", "mb-0");
    bookPrevTitle.innerText = `${book.title}`;
    let bookPrevPrice = document.createElement("p");
    bookPrevPrice.classList.add("mb-0");
    bookPrevPrice.innerText = `${book.price} €`;
    let bookPrevDelete = document.createElement("i");
    bookPrevDelete.classList.add("fa", "fa-times", "bg-danger", "text-white", "p-2", "rounded");
    bookPrevDelete.addEventListener("click", () => {

        bookItems.style.display = "none"; // rimuove il libro dal carrello
    });

    modalRow.appendChild(modalCol);
    modalCol.appendChild(bookList);
    bookList.appendChild(bookItems);
    bookItems.appendChild(bookBox);
    bookBox.appendChild(bookPrevTitle);
    bookBox.appendChild(bookPrevPrice);
    bookBox.appendChild(bookPrevDelete);

    let modalFooter = document.querySelector("div.modal-footer .btn-warning");
    modalFooter.classList.remove("d-none");
}

let inputField = document.getElementById("searchField");
let inputValue = inputField.value;
console.log(inputValue)

// funzione di ricerca: *DA IMPLEMENTARE, NON CON BUTTON MA CON INPUT
function searchBook () {   
    console.log(inputValue);
    // inputValue = inputValue.toLowerCase();
    // let filtered = results.filter((res) => {
    //     return res.title.toLowerCase().includes(inputValue.trim());
    // });
    // createCards (filtered);
}