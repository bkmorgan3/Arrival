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
  console.log("req.params", req.params.id)
  try {
    const product = await pool.query(
      `SELECT products.prod_name, products.description, products.image, products.price, products.in_set, sets.set_name FROM products LEFT JOIN sets ON products.in_set = sets.set_id WHERE product_id = $1`, [req.params.id]
    )
    res.locals.product = product.rows[0]
    return next()
  } catch (err) {
    console.error(err)
    return next(err)
  }
}


module.exports = {
  getProducts,
  showProductDetail,
}