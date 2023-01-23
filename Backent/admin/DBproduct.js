const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  productName: { type: String, required: true },
  Image: { type: String, required: true },
  Description: { type: String, required: true },
  Category: { type: String, required: true },
  Price: { type: String, required: true },
  
  
});

module.exports=Product