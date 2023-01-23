const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routerUser = require("./user/userRoute");
const routerAdmin = require("./admin/adminRoute");
const routerCart = require("./Cart/cartRoute");
const routerOrder = require("./Order/orderRoute");

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));

app.use(express.json());

app.use("/api/users", routerUser);
app.use("/api/admin", routerAdmin);
app.use("/api/cart", routerCart);
app.use("/api/order", routerOrder);

const mongoDB = "mongodb://localhost:27017/GAMINGWORLD";

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => app.listen(3000))
  .then(() =>
    console.log("connected to Database and listening to localhost 3000")
  )
  .catch((err) => console.log(err));
