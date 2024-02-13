// article endpoint:
let urlArticle = "https://striveschool-api.herokuapp.com/books/";

// nodo row:
let articleRow = document.getElementById("articleRow");

// params
let activeParams = window.location.search; 
// console.log(activeParams);
let params = new URLSearchParams(activeParams);
let bookId = params.get("id");

let article;
fetch(`${urlArticle}${bookId}`)
.then((response) => response.json())
.then((json) => {
    article = json;
    console.log(article)
    createArticle(article)
})
.catch((err)  => console.log("Error detected: ", err));

// funzione che crea il template dell'artista:
function createArticle (article) {   
    let firstCol = document.createElement("div");
    firstCol.classList.add("col-4");

    let articleImage = document.createElement("img");
    articleImage.classList.add("img-fluid");
    articleImage.src = article.img;

    let secondCol = document.createElement("div");
    firstCol.classList.add("col-8");

    let articleTitle = document.createElement("p");
    articleTitle.classList.add("h3");
    articleTitle.innerText = article.title;

    let articleCategory = document.createElement("p");
    articleTitle.classList.add("h5");
    articleCategory.innerText = article.category;

    let articleDescription = document.createElement("p");
    articleDescription.classList.add("ellipsis");
    articleDescription.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A laboriosam rem, odio quae dolorem";

    let articlePrice = document.createElement("p");
    articlePrice.classList.add("h5");
    articlePrice.innerText = article.price;

    //appendo i nodi
    articleRow.appendChild(firstCol);
    articleRow.appendChild(secondCol);
    firstCol.appendChild(articleImage);
    secondCol.appendChild(articleTitle);
    secondCol.appendChild(articleCategory);
    secondCol.appendChild(articleDescription);
    secondCol.appendChild(articlePrice);
}