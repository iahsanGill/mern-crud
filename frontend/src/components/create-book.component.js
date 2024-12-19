import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateBook extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
    this.onChangeBookISBN = this.onChangeBookISBN.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: "",
      author: "",
      isbn: "",
    };
  }

  onChangeBookTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeBookAuthor(e) {
    this.setState({ author: e.target.value });
  }

  onChangeBookISBN(e) {
    this.setState({ isbn: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const bookObject = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
    };
    axios
      .post("http://localhost:8080/books/create-book", bookObject)
      .then((res) => console.log(res.data));

    this.setState({ title: "", author: "", isbn: "" });

    // Redirect to Book List
    this.props.history.push("/book-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={this.state.title}
              onChange={this.onChangeBookTitle}
            />
          </Form.Group>

          <Form.Group controlId="Author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={this.state.author}
              onChange={this.onChangeBookAuthor}
            />
          </Form.Group>

          <Form.Group controlId="ISBN">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              value={this.state.isbn}
              onChange={this.onChangeBookISBN}
            />
          </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Create Book
          </Button>
        </Form>
      </div>
    );
  }
}
