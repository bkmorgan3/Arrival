const pool = require("../database");

const getProducts = async (req, res, next) => {
  try {
    const products = await pool.query('SELECT * FROM products')
    res.locals.products = products.rows
    return next()
  } catch (err) {
    console.error(err)
    return next(err)
  }
}

module.exports = {
  getProducts,
}