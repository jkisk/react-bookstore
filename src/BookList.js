import React, { Component } from 'react'
import Book from './Book'
import { Button } from "react-bulma-components/full"


export default class BookList extends Component {


    render() {

                return(
            <div>
            <Button onClick={this.props.sortByTitle} color="primary">Sort by Title</Button>
            <Button onClick={this.props.sortByAuthor}color="primary">Sort by Author</Button>
            <br />
            <br />
                {
                this.props.books.map(b => {
                    return <Book key={b.id} {...b} addToCart={() => this.props.addToCart(b.id)} />
                })
            }
            </div >
        )
    }

}
