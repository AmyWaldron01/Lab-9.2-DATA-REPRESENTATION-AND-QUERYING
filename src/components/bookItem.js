import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import axios from "axios";
export class BookItem extends React.Component {
    constructor() {
        super();
        //Binds for the deletebook method
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    //Calls the delete with the books id
    DeleteBook(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/book/' + this.props.books._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }


    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover}></img>
                            <footer >
                                <Card.Title>{this.props.books.title}</Card.Title>
                                <Card.Title>{this.props.books.cover}</Card.Title>
                                <Card.Title>{this.props.books.author}</Card.Title>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.book._id} className="btn btn-primary">Edit</Link>
                    {/* Deletes Book and reloads page */}
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>
        );
    }
}