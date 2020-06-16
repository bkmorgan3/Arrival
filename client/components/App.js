import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  render() {
    console.log("State is:", this.state.products)
    return (
      <div>The App</div>
    )
  }
}

export default App;