import React, { Component } from 'react'
import AdminBook from './AdminBook'


export default class AdminList extends Component {

    
    componentDidMount() {
        this.props.getBooks()
    }

   

    

    render() {

        return (
            <div>
                {this.props.books.map(b => {
                    return <AdminBook key={b.id} {...b} updateBook={() => this.props.updateBook(b.id)} deleteBook={() => this.props.deleteBook(b.id)} />
                })}
            </div>
        )
    }

}
