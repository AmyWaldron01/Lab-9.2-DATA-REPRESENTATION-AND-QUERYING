import React from "react";
import { BookItem } from './bookItem';

export class Books extends React.Component {
    render() {
        // return (
        //     <div>
        //         <h3>Hello From Boooks</h3>
        //         {/* using the array */}
        //         {console.log(this.props.books)}
        //         <BookItems></BookItems>
        //     </div>
        // );

        //taking an array and splitting it
        return this.props.books.map(
            //excuting this on each element
            (book) => {
                return <BookItem book={book} key={book._id} Reload={this.props.Reload} ></BookItem>
            }
        );
    }
}