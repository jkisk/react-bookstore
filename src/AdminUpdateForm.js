import React, { Component } from 'react'


export default class AdminUpdateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            title: this.props.title ,
            subtitle: this.props.subtitle,
            author: this.props.author,
            published: this.props.published,
            publisher: this.props.publisher,
            pages: this.props.pages,
            description: this.props.description,
            website: this.props.website
        }

    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
       e.preventDefault()
        console.log("nowthislogcounts:",this.state)
        this.props.updateBook(this.state)

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
                <input type='submit' value="Update Book" />
            </form >
        )
    }
}

