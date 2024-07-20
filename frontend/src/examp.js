// <!-- book.html -->
// <h1>{{ book.title }}</h1>
// <p>Author: {{ book.author }}</p>
// <p>Pages: {{ book.pages }}</p>

// <button id="rent-button" onclick="rentBook()">Rent this book</button>

// <div id="reader" style="display: none;">
//   <iframe src="" frameborder="0" width="100%" height="500px"></iframe>
// </div>

// <script>
//   const rentButton = document.getElementById('rent-button');
//   const readerDiv = document.getElementById('reader');

//   async function rentBook() {
//     const bookId = {{ book._id }};
//     const userId = {{ user._id }};

//     try {
//       const response = await fetch('/api/book/rent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ bookId, userId }),
//       });

//       if (response.ok) {
//         rentButton.disabled = true;
//         readerDiv.style.display = 'block';
//         const iframe = readerDiv.querySelector('iframe');
//         iframe.src = `/api/book/read/${bookId}`;
//       } else {
//         console.error(response.statusText);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
// </script>








// frontend.js (Frontend)
import axios from 'axios';

const rentBook = async (bookId) => {
  try {
    const response = await axios.post(`/api/books/rent/${bookId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const returnBook = async (bookId) => {
  try {
    const response = await axios.post(`/api/books/return/${bookId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};