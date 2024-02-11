const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cost: {
    type: String,
  },
  currency: {
    type: String,
  },
  discounted_price: {
    type: String,
  },
  product_id: {
    type: String,
  },
});
delete mongoose.connection.models["product"];
module.exports = mongoose.model("product", productSchema);
