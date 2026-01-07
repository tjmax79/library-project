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
    for(let key in myLibrary){
        return (key);
    }
}

console.log(key);