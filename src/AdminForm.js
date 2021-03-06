import React, { Component } from 'react'


export default class AdminForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            subtitle: "",
            author: "",
            published: "",
            publisher: "",
            pages: "",
            description: "",
            website: ""
        }

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
       e.preventDefault()
        console.log(this.state)
        this.props.newBook(this.state)

    }

    render() {
        return (
            < form onSubmit={this.handleSubmit} >
                <input type="text" placeholder="title" value={this.state.title} name="title" onChange={this.handleChange} />
                <input type="text" placeholder="subtitle" value={this.state.subtitle} onChange={this.handleChange} name="subtitle" />
                <input type="text" placeholder="author" value={this.state.author} onChange={this.handleChange} name="author" />
                <input type="text" placeholder="published" value={this.state.published} onChange={this.handleChange} name="published" />
                <input type="text" placeholder="publisher" value={this.state.publisher} onChange={this.handleChange} name="publisher" />
                <input type="text" placeholder="pages" value={this.state.pages} onChange={this.handleChange} name="pages" />
                <input type="text" placeholder="description" value={this.state.description} onChange={this.handleChange} name="description" />
                <input type="text" placeholder="website" value={this.state.website} onChange={this.handleChange} name="website" />
                <input type='submit' value="Add Book" />
            </form >
        )
    }
}

