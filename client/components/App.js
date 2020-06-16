import React, { Component } from 'react';
import ProductList from './ProductList';
class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      error: '',
      isLoading: true,
      editing: false,
    }
  }

  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data, isLoading: false }))
  }
  // FINSIH WITH EDITING HERE
  editProduct(product) {
    console.log("editing", product)
    this.setState({ editing: true })
  }

  deleteProduct(product) {
    console.log("deleting", product.product_id)
    const options = {
      method: 'DELETE',
    }
    // fetch(`/api/delete/${product}`,options)
    // this.setState({
    //   todos
    // })
    this.setState({
      products: this.state.products.filter(item => item.product_id != product.product_id)
    })
  }

  render() {
    const { error, isLoading, products, editing } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (isLoading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <ProductList editProduct={product => this.editProduct(product)} deleteProduct={product => this.deleteProduct(product)} products={products} />
        </div>
      )
    }
  }
}

export default App;