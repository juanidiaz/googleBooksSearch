import axios from "axios";

export default {
  // Gets all books
  getBooks: () => {
    return axios.get("/db/books");
  },
  // Gets the book with the given id
  getBook: (id) => {
    return axios.get("/db/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete("/db/books/" + id);
  },
  // Saves a book to the database
  saveBook: (bookData) => {
    return axios.post("/db/books", bookData);
  }
};
