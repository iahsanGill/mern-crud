import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class BookTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook() {
    axios
      .delete("http://localhost:8080/books/delete-book/" + this.props.obj._id)
      .then((res) => {
        console.log("Book successfully deleted!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.author}</td>
        <td>{this.props.obj.isbn}</td>
        <td>
          <Link className="edit-link" to={"/edit-book/" + this.props.obj._id}>
            Edit
          </Link>
          <Button onClick={this.deleteBook} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
