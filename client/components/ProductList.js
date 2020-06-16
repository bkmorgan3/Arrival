import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { products } = this.props
    console.log("products", products)
    return (
      <div className="main">
        {products.map(product => (
          <div key={product.product_id} className="product-container">
            <p>Brand: {product.brand_name}</p>
            <p>Name: {product.prod_name}</p>
            <p>Description: {product.description}</p>
            <img src={product.image} alt={`image for ${product.name}`} />
            <span>{product.price} / day</span>

          </div>
        ))}
      </div>
    )
  }
}

export default ProductList