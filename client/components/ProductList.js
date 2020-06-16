import React, { Component } from 'react';
import Product from './Product'
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
          <Product
            key={product.product_id}
            brand={product.brand_name}
            name={product.prod_name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    )
  }
}

export default ProductList