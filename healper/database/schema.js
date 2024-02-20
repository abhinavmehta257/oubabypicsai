const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   cost: {
//     type: String,
//   },
//   currency: {
//     type: String,
//   },
//   discounted_price: {
//     type: String,
//   },
//   product_id: {
//     type: String,
//   },
// });

const Users = new mongoose.Schema({
  order_id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mom_photo: {
    type: String,
  },
  dad_photo: {
    type: String,
  },
});
// module.exports = mongoose.model("product", productSchema);
module.exports = mongoose.models.Users || mongoose.model("Users", Users);
