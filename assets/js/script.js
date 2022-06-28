/**
 * This function receives all the json data from the
 * fetchAPIBookDataFromGoogle function and returns
 * the key value pairs required for the user.
 * The values are contained within semantic html tags 
 * for load into the DOM
 */
function createBook( bookInfo ){
    console.log(bookInfo)
    const volumeInfo = bookInfo.volumeInfo;
    return `<div class="standard-book-card is-selected">
        <div class="card-image">
            <img src="${volumeInfo.imageLinks.thumbnail}" alt="Book cover">
        </div>
        <div class="card-contents">
            <h2 class="title">${volumeInfo.title}</h2>
            <h3 class="authors">By ${volumeInfo.authors}</h3>
            <h4 class="page-count">${volumeInfo.pageCount} Pages</h4>
            <p class="description">${volumeInfo.description}</p>
        </div>
    </div>`;
}

function createFeaturedBooks( bookInfo ){
    console.log(bookInfo);
    const volumeInfo = bookInfo.volumeInfo;
    return `<div class="featured-book-card">
        <div class="featured-card-contents">
            <h2 class="title featured">${volumeInfo.title}</h2>
            <h3 class="authors featured">By ${volumeInfo.authors}</h3>
            <h4 class="page-count featured">${volumeInfo.pageCount} Pages</h4>
            <p class="description featured">${volumeInfo.description}</p>
        </div>
        <div class="featured-image">
            <img src="${volumeInfo.imageLinks.thumbnail}" alt="Book cover">
        </div>
    </div>`;
};

/**
 * Provides a fetch request to the Google Books API.
 * 
 * If the response is not ok an error is provided.
 * If the response is ok the json data is passed
 * as 'books' into the createBook function.
 * If the response is ok the json data is sliced
 * to provide the last two entries for the createFeaturedBooks 
 * function.
 */
function fetchAPIBookDataFromGoogle() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
    .then( response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
            }
        return response.json() })
    .then( json => {
        // method to pass the json data to the createBook(), and add to HTML
        const books = json.items
        const results = books.map(book=>createBook(book))
        console.log(results)
        document.getElementById("book-listings-container").innerHTML = results.join("")
        // method to slice the json data then pass to the createFeaturedBook(), and add to HTML
        const featured_books = json.items.slice(-2);
        const outputs = featured_books.map(book=>createFeaturedBooks(book))
        console.log(outputs);
        document.getElementById("featured_books-listings-container").innerHTML = outputs.join("") })
    .catch(errorMessage=>console.error("Could not access Google API due to", errorMessage))
};

/**
 * On DOM page load the function to 
 * fetch data from the Google Books API
 * is executed.
 */
window.onload = function() {
    fetchAPIBookDataFromGoogle();
};