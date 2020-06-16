import React, { Component } from 'react';
import Product from './Product'
class ProductList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { products, editProduct, deleteProduct, getProductDetail } = this.props;

    return (
      <div className="main">
        {products.map(product => (
          <Product
            getProductDetail={() => getProductDetail(product)}
            deleteProduct={() => deleteProduct(product)}
            editProduct={() => editProduct(product)}
            key={product.product_id}
            id={product.product_id}
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