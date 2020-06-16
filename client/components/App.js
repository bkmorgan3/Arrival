import React, { Component } from 'react';
import ProductList from './ProductList';
import EachProduct from './EachProduct';
class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      error: '',
      isLoading: true,
      editing: false,
      productDetail: {}
    }
  }
  // Once app loads, fetch data from db.
  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }
  // FINSIH WITH EDITING HERE
  editProduct(product) {
    console.log("editing", product)
    this.setState({ editing: true })
  }
  // this deletes a product from the ui only, this is deliberate.
  deleteProduct(product) {
    const options = {
      method: 'DELETE',
    }
    // Commented out the network request to delete to avoid deleting all products from database.
    // fetch(`/api/delete/${product.product_id}`,options)
    this.setState({
      products: this.state.products.filter(item => item.product_id != product.product_id)
    })
  }

  getProductDetail(product) {
    const { product_id } = product

    fetch(`/api/products/${product_id}`)
      .then(res => res.json())
      // data comes back but I didn't get to display it.  
      .then(data => <EachProduct data={data} />)

  }

  render() {
    const { error, isLoading, products, editing } = this.state;

    if (error) {
      return <div className="message"><h1>{error.message}</h1></div>
    } else if (isLoading) {
      return <div className="message"> <h1>Loading...</h1></div>
    } else if (this.state.products.length > 0) {
      return (
        <div>
          <ProductList getProductDetail={this.getProductDetail} editProduct={product => this.editProduct(product)} deleteProduct={product => this.deleteProduct(product)} products={products} />
        </div>
      )
    } else {
      return (
        <div className="empty">
          <h3>There are no items</h3>
        </div>
      )
    }
  }
}

export default App;