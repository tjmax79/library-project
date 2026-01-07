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


function displayBookOnPage () {
    const container = document.querySelector("#container");

    // while(container.firstChild){
    //     container.removeChild(container.firstChild)
    // }


myLibrary.forEach((book) =>{ 
    // Create the main card container
    const bookCard = document.createElement("div");
    bookCard.style.cssText = "width:400px; border:2px solid black;border-radius:5px;padding!5px,margin:10px"

    
// create and style the title element
const titleElement = document.createElement("h3");
titleElement.textContent = book.title;
titleElement.style.textAlign ="center"

//create and style the Author element
const authorElement = document.createElement("p");
authorElement.textContent = `Author : ${book.author}`

// create and style the pages element

const pagesElement = document.createElement("p");
pagesElement.textContent = `Pages: ${book.pages}`;

//create read status
const readElement = document.createElement ('p');
readElement.textContent = `Status: ${book.read} "Read" : "Not Read"`

// append all pieces to the car

 bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(readElement);

container.appendChild(bookCard)
 
})
}
displayBookOnPage()