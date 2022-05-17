// Book Object Constructor
function Book(name, author, pages, isRead="False") {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
Book.prototype.info = function() {
  return(`${this.name} by ${this.author}, ${this.pages} pages, ${this.isRead}`);
};
let Shrek = new Book("shrek","the movie", "69", "is not read yet");

let myLibrary = [];

function addBookToLibrary() {
    
}
// Modal Functionality
const modal = document.querySelector('.modal-container');
const modalButtonOpen = document.querySelector('.modal-open').addEventListener('click', () => {
  modal.classList.remove('hide');
});
const modalButtonClose = document.querySelector('.modal-close').addEventListener('click', () => {
  modal.classList.add('hide');
});

modal.addEventListener('click',(e) => {
  console.log(e.target.classList.add('hide'));
})