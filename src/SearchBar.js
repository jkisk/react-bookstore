import React, { Component } from 'react'
import axios from 'axios'

class SearchBar extends Component {
 state = {
   query: '',
 }

 getInfo = () => {
    axios.get(`http://localhost:8082/api/books/${this.state.query}`)
    .then(({ data }) => {
      this.setState({
        results: data.data
      })
    })
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}

export default SearchBar
