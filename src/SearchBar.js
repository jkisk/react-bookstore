import React, { Component } from 'react'

import SearchBook from './SearchBook'


class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      results: []
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  handleQuery = (e) => {
    e.preventDefault()
    const searchString = this.state.query.toLowerCase()
    let result = []
    for (const ele of this.props.books) {
      if (ele.title) {
        if (ele.title.toLowerCase().includes(searchString) || ele.author.toLowerCase().includes(searchString))
          result.push(ele)
      }
    }
    this.setState({
      results: result
    })

  }

  render() {
    return (
      <form onSubmit={this.handleQuery}>
        <input
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <div>
          <input type='submit' value="Search" />
        </div>
        <div>
          {this.state.results.map(b => <SearchBook key={b.id} {...b} addToCart={() => this.props.addToCart(b.id)} />)}
        </div>
      </form>
    )
  }
}

export default SearchBar
