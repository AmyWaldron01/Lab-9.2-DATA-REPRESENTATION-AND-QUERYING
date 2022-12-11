import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit() {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editBook = {
            title: title,
            cover: cover,
            author: author
        }


        //saving the Data at port 4000
        axios.put('http://localhost:4000/api/book/' + id, editBook)
            .then()
            .catch();
    }

    return (
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Edit Book"></input>
            </form>
        </div>
    );
}