import React from 'react';

const Product = props => {
  const { brand, description, image, name, price } = props;

  return (
    < div className="product-container" >
      <h2>{brand}</h2>
      <h4>{name}</h4>
      <p className="description">{description}</p>
      <img className="image" src={image} alt={`image for ${name}`} />
      <span className="price">{price} / day</span>
    </ div>
  )
}

export default Product;