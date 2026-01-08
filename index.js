const myLibrary  =  [];

function Book (title,author,pages,read) {
      this.id = crypto.randomUUID();
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
}

function addBookToLibrary (title,author,pages,read){
    const newBook = new Book (title,author,pages,read)
    myLibrary.push(newBook)
}

addBookToLibrary("Osanle", 'Nike', 295, true)
addBookToLibrary('Be you', "Tunde", 50, false)
addBookToLibrary('Absolute', 'George', 300,true )
console.log(myLibrary);

function displayBook () {
    const container = document.querySelector("#container")
    // for clearing
         while(container.firstChild){
            
            container.removeChild(container.firstChild)
        }

    myLibrary.forEach((book)=>{
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      container.style.gap = '10px'

  const bookCard = document.createElement("div")
  bookCard.style.cssText = "width:250px;border:2px solid black;border-radius:5px; margin-bottom:5px;text-align:center;background-color:rebeccapurple;color:white;"
  

        container.appendChild(bookCard)

        
        const bookId = document.createElement('p')
        bookId.textContent = `Id: ${book.id}`
        bookCard.appendChild(bookId)


        const bookTitle = document.createElement("h3");
        bookTitle.textContent = `Title: ${book.title}`
        bookCard.appendChild(bookTitle)

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `Author:${book.author}`;
        bookCard.appendChild(bookAuthor)

        const bookPages = document. createElement("p");
        bookPages.textContent = `Pages: ${book.pages}`
        bookCard.appendChild(bookPages)

        const hasReadBook = document.createElement("p");
        hasReadBook.textContent = `Read:${book.read}`;
        bookCard.appendChild(hasReadBook);

        myLibrary.forEach((book)=>{
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove Book';
            // 2. Associate the DOM element with the book's unique ID
            removeBtn.setAttribute('data-bookid', book.id);
            removeBtn.style.cssText = "margin-top:10px; cursor:pointer;background-color:white;color:rebeccapurple,border:none;padding:5px 10px;border-radius:3px;"

            removeBtn.addEventListener("click",(e)=>{
                const idToRemove = e.target.getAttribute("data-book-id")
                removeBook(idToRemove)
            })
            bookCard.appendChild(removeBtn)
        })

        
    })
    

}
displayBook()


const modal = document.querySelector('#modal');
const openModal = document.querySelector('#modal-button');
const bookForm = document.querySelector('form');

// show modal
openModal.addEventListener('click', ()=>{
    modal.showModal();
})

// handle the form submission
bookForm.addEventListener("submit",(e) =>{
    e.preventDefault();

   // /get the values from the input field
const title = document.querySelector('#book-title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const read = document.querySelector('#read').checked;

//add book to library array
addBookToLibrary(title, author, pages,read);

displayBook();
bookForm.reset()
modal.close()

});

function removeBook(id) {
    // Find the index of the book with the matching ID
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    
    // If the book is found, remove it from the array
    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
    }
    
    // Refresh the display to reflect the changes
    displayBook();
}
