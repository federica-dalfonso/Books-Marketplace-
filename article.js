// article endpoint:
let urlArticle = "https://striveschool-api.herokuapp.com/books/";

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

// funzione che inserisce il contenuto:
function createArticle (article) {   
    let articleImg = document.querySelector("img.article-img"); 
    articleImg.src = article.img;

    let articleTitle = document.querySelector("h3");
    articleTitle.innerText = article.title;

    let articleCategory = document.querySelector("h5");
    articleCategory.innerText = article.category;

    let articlePrice = document.querySelector("h6");
    articlePrice.innerText = `${article.price} euro`;
}