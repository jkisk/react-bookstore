import React, { Component } from 'react'
import {Box, Heading} from 'react-bulma-components'
import AdminBookClass from './AdminBookClass'
import AdminForm from './AdminForm'


export default class AdminList extends Component {

    
    componentDidMount() {
        this.props.getBooks()
    }

   

    

    render() {

        return (
            <div>
                <Box>
                 <Heading>Add Book to Inventory</Heading>   
                {<AdminForm newBook={this.props.newBook}/>}
                </Box>
                <Heading>Current Inventory:</Heading>
                {this.props.books.map(b => {
                    return <AdminBookClass key={b.id} {...b} updateBook={this.props.updateBook} deleteBook={() => this.props.deleteBook(b.id)} />
                })}
            </div>
        )
    }

}
