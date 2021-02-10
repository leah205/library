let myLibrary = ['yes'];
const console = document.querySelector('#console');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('form');
const newBookBtn = document.querySelector('#addBook');
submitBtn.addEventListener('click', addBookToLibrary);
newBookBtn.addEventListener('click', showForm);
function showForm(){ 
      if(form.style.display === 'block'){
          form.style.display = 'none';
      }
      else{
        form.style.display = 'block';
      }
    }
    function Book(title,author,pages, isRead){
this.title = title,
this.pages = pages,
this.author = author,
this.isRead = isRead
    }
 
    
    addBookToLibrary.prototype = Object.create(Book);

function addBookToLibrary(){
    let authorInput = document.querySelector('#author').value;
    let titleInput = document.querySelector('#title').value;
    let pagesInput = document.querySelector('#pages').value;
    let isReadInput = document.querySelector('#read').value;
    let newBook = new Book( 
        authorInput,
         titleInput,
         pagesInput,
        'yes',);
        newBook.logBook();

     
}
Book.prototype.logBook = function(){
        console.log(
           `author: ${this.author} title: ${this.title} Pages: ${this.pages} Read: ${this.read}`
        );
       
        }
   console.textContent = myLibrary;
   