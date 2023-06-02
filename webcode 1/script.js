async function fetchData() {
    try {
      const response = await fetch('https://anapioficeandfire.com/api/books');
      const data = await response.json();
      // Process the data here
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function fetchData() {
    try {
      const response = await fetch('https://anapioficeandfire.com/api/books');
      const data = await response.json();
  
      const booksContainer = document.getElementById('books-container');
  
      data.slice(0, 10).forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
  
        const title= document.createElement('h2');
        title.textContent = book.name;
  
        const isbn = document.createElement('p');
        isbn.textContent = `ISBN: ${book.isbn}`;
  
        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.numberOfPages}`;
  
        const authors = document.createElement('p');
        authors.textContent = `Authors: ${book.authors.join(', ')}`;
  
        const publisher = document.createElement('p');
        publisher.textContent = `Publisher: ${book.publisher}`;
  
        const released = document.createElement('p');
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