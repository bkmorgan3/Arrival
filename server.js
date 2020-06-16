const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const { getProducts } = require("./handlers/productHandler")

app.use(cors())
app.use(bodyParser.json());

app.get("/api/products", getProducts, (req, res) => {
  res.status(200).json(res.locals.products);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})