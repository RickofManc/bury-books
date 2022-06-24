**JD Front-End Induction Task**

You are required to build a simple listing page for HTML 5 books using the
provided Google Books API URL:
* Wire-frames for mobile and desktop have been provided, you should
attempt a mobile first design approach to achieve both layouts in a single
style-sheet. 
* Special attention should be taken to the layout changes
between the two, it is up to yourself to select appropriate breakpoints
between the two designs.

<br/>

You are given the freedom to choose whatever library or framework you
wish. It would be preferential to not use jQuery to complete the task.
Please leave comments in your code to explain any problems or reasons
for the choices you've made.

<br/>

Requirements
* Each book in the list should display the book cover, title, subtitle, all
authors, number of pages and description.
* You should be able to select on a book anywhere on the page by
clicking on them, it should be clear the user has made a selection, add
a class of is-selected .
* You should be able to click on a selected book a second time to
remove the class.
* Reloading the page should remember the state of the selected books.
* Use the last two books from the JSON array and display those in the
'Featured' books column only.
* The book description should be a maximum of 140 characters.

<br/>

Nice To Have
* No use of CSS frame work
https://www.googleapis.com/books/v1/volumes?q=HTML5
* Cross-browser compatible - please comment which browsers you've
tested on
* Tests for your code
* Avoid the use of JavaScript to display the mobile burger menu
* Push the task to a public repository to document your commit history