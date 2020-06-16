const pool = require("../database");

const getProducts = async (req, res, next) => {
  try {
    const products = await pool.query('SELECT products.prod_name, products.image, products.description, products.price, products.product_id, brands.brand_name FROM products LEFT JOIN brands ON products.brand_name=brands.brand_id')
    res.locals.products = products.rows
    return next()
  } catch (err) {
    console.error(err)
    return next(err)
  }
}

const showProductDetail = async (req, res, next) => {
  try {
    // const products = await pool.query(

    // )
  } catch (error) {
    console.error(err)
    return next(err)
  }
}


module.exports = {
  getProducts,
  showProductDetail,
}