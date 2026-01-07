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
    // for clearing
         while(container.firstChild){
            
            container.removeChild(container.firstChild)
        }

    myLibrary.forEach((book)=>{

     
  const container = document.querySelector("#container")
      

  const bookCard = document.createElement("div")
  bookCard.style.cssText = "width:250px; padding:20px; border:2px solid black;border-radius:5px; margin-bottom:5px;text-align:center "
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
        bookCard.appendChild(hasReadBook)

        
    })

}
displayBook()