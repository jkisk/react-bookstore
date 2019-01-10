import React, { Component } from 'react'
import { Heading, Box } from "react-bulma-components/full"
import AdminUpdateForm from './AdminUpdateForm'


export default class AdminBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            title: this.props.title,
            subtitle: this.props.subtitle,
            author: this.props.author,
            published: this.props.published,
            publisher: this.props.publisher,
            pages: this.props.pages,
            description: this.props.description,
            website: this.props.website
        }

    }

    render() {
        return (
            <Box>
                <p>
                    <span>Title: </span>{this.state.title}<br />
                    <span>Subtitle: </span>{this.state.subtitle}<br />
                    <span>Author: </span>{this.state.author}<br />
                    <span>Published: </span>{this.state.published}<br />
                    <span>Publisher: </span>{this.state.publisher}<br />
                    <span>Pages: </span>{this.state.pages}<br />
                    <span>Description: </span>{this.state.description}<br />
                    <span>Website: </span>{this.state.website}<br />
                </p>
                <br />
                <br />
                <Box>
                    <Heading>Modify Listing</Heading>
                    <AdminUpdateForm updateBook={this.props.updateBook} {...this.props} />
                </Box>
                <button onClick={this.props.deleteBook} color="primary">Delete Book</button>

            </Box>
        )
    }
}