const API_URL = "https://www.googleapis.com/books/v1/volumes?q=HTML5";

/**
 * This function receives all the json data from the
 * fetchAPIBookDataFromGoogle function and returns
 * the key value pairs required for the user.
 * The values are contained within semantic html tags 
 * for load into the DOM
 */
function createBook( bookInfo ){
    console.log(bookInfo)
    const volumeInfo = bookInfo.volumeInfo
    return `<div class="standard-book-card">
        <div>
            <img src="${volumeInfo.imageLinks.thumbnail}" alt="Book cover">
        </div>
        <div class="card-contents">
            <div class="title">${volumeInfo.title}</div>
            <div class="author">${volumeInfo.author}</div>
            <div class="page-count">${volumeInfo.pageCount}</div>
            <div class="description">${volumeInfo.description}</div>
        </div>
    </div>`
}

/**
 * Provides a fetch request to the Google Books API.
 * 
 * If the response is not ok an error is provided.
 * If the response is ok the json data is passed
 * as 'books' into the createBook function.
 */
function fetchAPIBookDataFromGoogle() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
    .then( response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
            }
        return response.json() })
    .then( json => {
        const books = json.items
        json.items
        const results = books.map(book=>createBook(book))
        console.log(results)
        document.getElementById("output").innerHTML = results.join("")
    
    } ).catch(errorMessage=>console.error("Could not access Google API due to", errorMessage))
}

/**
 * On DOM page load the function to 
 * fetch data from the Google Books API
 * is executed.
 */
window.onload = function() {
    fetchAPIBookDataFromGoogle();
};