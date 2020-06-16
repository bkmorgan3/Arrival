import React, { Component } from 'react';
import ProductList from './ProductList';
class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      error: '',
      isLoading: true
    }
  }

  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data, isLoading: false }))
  }

  render() {

    const { error, isLoading, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (isLoading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>The App
          <ProductList products={products} />
        </div>
      )
    }
  }
}

export default App;