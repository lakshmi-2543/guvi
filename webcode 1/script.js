async function fetchData() {
    try {
      let response = await fetch('https://anapioficeandfire.com/api/books');
      let data = await response.json();
      // Process the data here
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function fetchData() {
    try {
      let response = await fetch('https://anapioficeandfire.com/api/books');
      let data = await response.json();
  
      let booksContainer = document.getElementById('books-container');
  
      data.slice(0, 10).forEach((book) => {
        let bookElement = document.createElement('div');
        bookElement.classList.add('book');
  
        let title= document.createElement('h2');
        title.textContent = book.name;
  
       let isbn = document.createElement('p');
        isbn.textContent = `ISBN: ${book.isbn}`;
  
        let pages = document.createElement('p');
        pages.textContent = `Pages: ${book.numberOfPages}`;
  
        let authors = document.createElement('p');
        authors.textContent = `Authors: ${book.authors.join(', ')}`;
  
        let publisher = document.createElement('p');
        publisher.textContent = `Publisher: ${book.publisher}`;
  
        let released = document.createElement('p');
        released.textContent = `Released: ${book.released}`;

        bookElement.append(title);
        bookElement.append(isbn);
        bookElement.append(pages);
        bookElement.append(authors);
        bookElement.append(publisher);
        bookElement.append(released);
          
        booksContainer.appendChild(bookElement);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  window.onload = fetchData;