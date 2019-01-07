// class App extends React.Component {

//     async createItem(item) {
//       const response = await fetch('http://localhost:8082/api/people', {
//         method: 'POST',
//         body: JSON.stringify(item),
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         }
//       })
//       const person = await response.json()
//       this.setState({people: [...this.state.people, person]})
//     }
  
//     render() {
//       return <div>...</div>
//     }
  
//   }