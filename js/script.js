function Book(title, author,numPages,isRead) {

  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;

}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead}`;
}

// Selectors
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