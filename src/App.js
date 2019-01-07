
import React, { Component } from 'react'
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
        console.log("ping add")
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
        console.log('title sort:', titleSort)
        this.setState({
            books: titleSort
        })
    }

    sortByAuthor = () => {
        let authorSort = [...this.state.books]
        authorSort.sort((a, b) => {
            return b.author > a.author ? -1 : 1
        })
        console.log('author sort:', authorSort)

        this.setState({
            books: authorSort
        })

    }

    deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8082/api/books/${id}`)
            this.getBooks()
        } catch (err) {
            console.log(err)
        }
    }

    updateBook = async (id) => {
        try {
            axios.put(`http://localhost:8082/api/books/${id}`)

            this.getBooks()

        } catch (err) {
            console.log(err)
        }
    }

    getCartBooks = () => {
        console.log("ping get cb")
        let cartArray = this.state.books.filter(b => {
            return b.inCart === true
        })
        let newTotal = cartArray.length
        console.log(cartArray, newTotal)
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
                <h1>Bookstore!</h1>
                <SearchBar />
                <BookList
                    addToCart={this.addToCart}
                    getBooks={this.getBooks}
                    sortByTitle={this.sortByTitle}
                    sortByAuthor={this.sortByAuthor}
                    books={this.state.books}
                />
                <h1>Cart!</h1>
                <Cart
                    getCartBooks={this.getCartBooks}
                    removeFromCart={this.removeFromCart}
                    inCartBooks={this.state.inCartBooks}
                    total={this.state.total}
                />
                <h1>For Admin Eyes Only</h1>
                <AdminList
                    getBooks={this.getBooks}
                    updateBook={this.updateBook}
                    deleteBook={this.deleteBook}
                    books={this.state.books}
                />
            </div>
        );
    }
}