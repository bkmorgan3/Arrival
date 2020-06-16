import React from 'react';

const Product = props => {
  const { brand, description, image, name, price, editProduct, deleteProduct } = props;

  // console.log("AllPROPS", props)
  return (
    < div className="product-container" >
      <h2 onClick={product => editProduct(product)}>{brand}</h2>
      <h4>{name}</h4>
      <p className="description">{description}</p>
      <img className="image" src={image} alt={`image for ${name}`} />
      <span className="price">{price} / day</span>
      <div>
        <button className="button edit">Edit</button>
        <button onClick={product => deleteProduct(product)} className="button delete">Delete</button>
      </div>
    </ div >
  )
}

export default Product;