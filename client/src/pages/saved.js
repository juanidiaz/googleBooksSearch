import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import MediaCard from "../components/MediaCardSave"

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
            <hr />
            <h3>Previously saved books</h3>
            <hr />
            {this.state.books.length ? (
              <div className="container foundBooks">
                <div className="row thisRow">
                  {this.state.books.map(book => (
                    <div className="col-md-4" key={book._id}>
                      <MediaCard
                        _id={book._id}
                        googleId={book.id}
                        title={book.title}
                        description={book.description}
                        author={book.author}
                        pageCount={book.pageCount}
                        link={book.link}
                        image={book.image}
                        deleteBook={this.deleteBook}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
                <small>You have no books saved. First you need to <a href='/'>search</a> for books.</small>
              )}
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-10">
              <h1>Saved books</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <MediaCard
                  // <BookCard 
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
        </Row> */}
      </Container>
    );
  }
}

export default Books;
