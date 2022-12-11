import React from "react";
import { Books } from "./books";
//Import Axios
import axios from "axios";

//NOW USING API INSTEAD 
export class Read extends React.Component {

    constructor() {
        super();
        //Binds reload reload method
        this.Reload = this.Reload.bind(this);
    }

    Reload() {
        this.componentDidMount();
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            //Function
            .then((response) => {
                // Updating the State
                this.setState({ books: response.data })
            })
            //If Request returns error
            .catch((error) => {
                console.log(error);
            })
    }

    //Object that will hold all data for class
    state = {
        //Assigning Data to The Array
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                {/*adding the reload on the read page */}
                <Books books={this.state.books} Reload={this.Reload} ></Books>
            </div>
        );
    }
}