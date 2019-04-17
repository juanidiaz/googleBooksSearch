import axios from "axios";

export default {
  // Gets all books from database
  getBooks: () => {
    return axios.get("/db/books");
  },
  // Gets the book with the given id from database
  getBook: (id) => {
    return axios.get("/db/books/" + id);
  },
  // Search for books in google
  searchBooks: (query) => {
    return axios.get("/api/books/" + query);
  },
  // Deletes the book with the given id from database
  deleteBook: (id) => {
    return axios.delete("/db/books/" + id);
  },
  // Saves a book to the database
  saveBook: (bookData) => {
    // console.log("SAVE REQUEST")
    return axios.post("/db/books", bookData);
  }
};
