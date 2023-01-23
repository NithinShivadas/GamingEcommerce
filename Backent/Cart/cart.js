const mongoose = require("mongoose");

const Cart = mongoose.model("Cart", {
  productName: { type: String, required: true },
  Image: { type: String, required: true },
  Description: { type: String, required: true },
  Category: { type: String, required: true },
  Price: { type: String, required: true },
  userEmail: { type: String,},

});

module.exports=Cart