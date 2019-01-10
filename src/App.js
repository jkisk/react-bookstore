
import React, { Component } from 'react'
import { Heading, Box, Columns } from "react-bulma-components/full"
import BookList from './BookList'
import AdminList from './AdminList'
import SearchBar from './SearchBar'
import Cart from './Cart'
import axios from 'axios'






export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            inCartBooks: [],
            total: 0
        }
    }

    componentDidMount = async () => {
        await this.getBooks()
        this.getCartBooks()
    }

    getBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8082/api/books')
            this.setState({
                books: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    addToCart = async (id) => {
        try {
            await axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
            await this.getBooks()
            this.getCartBooks()
        } catch (err) {
            console.log(err)
        }
    }

    sortByTitle = () => {
        let titleSort = [...this.state.books]
        titleSort.sort((a, b) => {
            return b.title > a.title ? -1 : 1
        })
        this.setState({
            books: titleSort
        })
    }

    sortByAuthor = () => {
        let authorSort = [...this.state.books]
        authorSort.sort((a, b) => {
            return b.author > a.author ? -1 : 1
        })
        this.setState({
            books: authorSort
        })

    }

    newBook = async ({ title, subtitle, author, published, publisher, pages, description, website }) => {
        try {
            await axios.post('http://localhost:8082/api/books', {
                title: title,
                subtitle: subtitle,
                author: author,
                published: published,
                publisher: publisher,
                pages: pages,
                description: description,
                website: website
            })

            this.getBooks()

        }
        catch (err) {
            console.log(err)
        }
    }

    deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8082/api/books/${id}`)
            this.getBooks()
        } catch (err) {
            console.log(err)
        }
    }

    updateBook = async ({ id, title, subtitle, author, published, publisher, pages, description, website }) => {
        console.log("thislogmightworkforid:", id)
        try {
            await axios.put(`http://localhost:8082/api/books/${id}`, {
                title: title,
                subtitle: subtitle,
                author: author,
                published: published,
                publisher: publisher,
                pages: pages,
                description: description,
                website: website
            })
            this.getBooks()

        } catch (err) {
            console.log(err)
        }
    }

    getCartBooks = () => {
        let cartArray = this.state.books.filter(b => {
            return b.inCart === true
        })
        let newTotal = cartArray.length
        this.setState({
            inCartBooks: cartArray,
            total: newTotal
        })
    }

    removeFromCart = async (id) => {
        try {
            await axios.patch(`http://localhost:8082/api/books/cart/remove/${id}`)
            await this.getBooks()
            this.getCartBooks()

        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="container">
                <Heading>Bookstore!</Heading>
                <Columns>
                    <Columns.Column size="half">
                        <Box>
                            <Heading>Inventory</Heading>
                            <BookList
                                addToCart={this.addToCart}
                                getBooks={this.getBooks}
                                sortByTitle={this.sortByTitle}
                                sortByAuthor={this.sortByAuthor}
                                books={this.state.books}
                            />
                        </Box>
                    </Columns.Column>
                    <Columns.Column size="half">
                        <Box>
                            <Heading>Find a Book!</Heading>
                            <SearchBar
                                books={this.state.books}
                                addToCart={this.addToCart}
                            />
                        </Box>
                        <Box>
                            <Heading>Shopping Cart</Heading>
                            <Cart
                                getCartBooks={this.getCartBooks}
                                removeFromCart={this.removeFromCart}
                                inCartBooks={this.state.inCartBooks}
                                total={this.state.total}
                            />
                        </Box>

                        <Box>
                            <Heading>Admin Features: scroll down</Heading>
                        </Box>
                    </Columns.Column>
                </Columns>
                <Box>
                    <Heading>For Admin Eyes Only</Heading>
                    <AdminList
                        getBooks={this.getBooks}
                        updateBook={this.updateBook}
                        newBook={this.newBook}
                        deleteBook={this.deleteBook}
                        books={this.state.books}
                    />
                </Box>
            </div>
        );
    }
}