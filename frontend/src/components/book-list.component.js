import axios from "axios";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import BookTableRow from "./BookTableRow"; // Ensure this import

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/books/")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.books.map((res, i) => {
      return <BookTableRow obj={res} key={i} />; // Ensure this usage
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
