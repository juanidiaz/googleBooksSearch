import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import BookCard from "../components/BookCard"

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data, title: "", author: "", description: "" }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10">
            {/* <Jumbotron> */}
              <h1>Saved books</h1>
            {/* </Jumbotron> */}
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <BookCard 
                  _id = {book._id}
                  title = {book.title}
                  description = {book.description}
                  author = {book.author}
                  pageCount = {book.pageCount}
                  link = {book.link}
                  image = {book.image}
                  deleteBook = {this.deleteBook}
                  />
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
