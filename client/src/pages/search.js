import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import MediaCard from "../components/MediaCard"

class Books extends Component {
  state = {
    books: [],
    query: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query != '') {
      // console.log(`Searching for ${this.state.query}`)
      API.searchBooks(this.state.query)
        .then(res => {
          this.setState({ books: res.data.items });
          // console.log(res.data.items)
        })
        .catch(err => console.log(err));
    }
  };

  handleSaveBook = info => {

    var newBook = {
      googleId: info.googleId,
      title: info.title,
      author: info.author,
      description: info.description,
      image: info.image,
      link: info.link,
      pageCount: info.pageCount
    }

    console.log(newBook);

    API.saveBook(newBook)
      .then( console.log("SAVED"))
      .catch(err => console.log(err));
  };

  render() {
    return (

      <Container fluid>
        <Row>
          <Col size="md-10">
            {/* <Jumbotron> */}
            <br />
            <h3>Search for books by entering it's title, author or any keyword</h3>
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Search by Title, Author, Description, etc"
              />
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                SEARCH BOOKS
              </FormBtn>
            </form>
            {/* </Jumbotron> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-10">
            <hr />
            <h1>Search result</h1>
            {this.state.books.length ? (
              // <List><
              <div className="container foundBooks">
                <div className="row thisRow">
                  {this.state.books.map(book => (
                    <div className="col-md-4" key={book.id}>
                      <MediaCard
                        googleId={book.id}
                        title={book.volumeInfo.title}
                        description={book.volumeInfo.description}
                        author={book.volumeInfo.authors}
                        pageCount={book.volumeInfo.pageCount}
                        link={book.volumeInfo.infoLink}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        handleSaveBook={this.handleSaveBook}
                      />
                    </div>
                  ))}
                </div>
              </div>
              // </List>
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
