import React, { Component } from 'react'
import Book from './Book'


export default class BookList extends Component {

    
    componentDidMount() {
       this.props.getBooks()
    }

    
    


    render() {

                return(
            <div>
            <button onClick={this.props.sortByTitle}>Sort by Title</button>
            <button onClick={this.props.sortByAuthor}>Sort by Author</button>
                {
                this.props.books.map(b => {
                    return <Book key={b.id} {...b} addToCart={() => this.props.addToCart(b.id)} />
                })
            }
            </div >
        )
    }

}
