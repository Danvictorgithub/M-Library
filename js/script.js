// Modal Functionality
const modal = document.querySelector('.modal-container');
const modalButtonOpen = document.querySelector('.modal-open').addEventListener('click', () => {
  modal.classList.remove('hide');
});
modal.addEventListener('click',(e) => {
  console.log(e.target.classList.add('hide'));
})

//Selectors for Inputs
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const inputPages = document.querySelector('.input-pages');
const inputRead = document.getElementById('isRead');

const bookTable = document.querySelector('.book-list');

// Book Object Constructor
function Book(name, author, pages, isRead="off",index) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.index = index;
}
Book.prototype.info = function() {
  return(`${this.name} by ${this.author}, ${this.pages} pages, ${this.isRead}`);
};

//Sample Book
let Shrek = new Book("shrek","the movie", "69", true,0);

// Book Data Storage
let myLibrary = [Shrek];

// Library Functions
function addBookToLibrary() {
  myLibrary.forEach((book) => {
    let bookRow = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookAuthor = document.createElement('td');
    let bookPages = document.createElement('td');
    let bookisRead = document.createElement('td');
    bookTitle.textContent = `${book.name}`;
    bookAuthor.textContent = `${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    bookisRead.textContent = `${(book.isRead) ? 'Read': 'Not Read'}`;
    bookInfo = [bookTitle,bookAuthor,bookPages,bookisRead]
    bookInfo.forEach((info) => {
       bookRow.appendChild(info);
    });
    bookTable.lastChild.appendChild(bookRow);
  });
}
function SubmitBook(e) {
  if (isInputFilled()) {
    const newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputRead.checked,myLibrary.length);
    myLibrary.push(newBook);
    modal.classList.add('hide');
    updateBookTable();
  } else {
    alert("Please fill the info completely")
  }
}

function isInputFilled() {
  if (inputTitle.value != "" && inputAuthor.value != "" && inputPages.value != "") {
    return true;
  } else {
    return false;
  }
}
function updateBookTable() {
    while(bookTable.lastChild.childNodes.length != 0) {
      bookTable.lastChild.removeChild(bookTable.lastChild.firstChild);
    }
    addBookToLibrary();
}

const modalSubmit = document.querySelector('.modal-close');
modalSubmit.addEventListener('click', SubmitBook)


updateBookTable();

