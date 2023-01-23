const express = require("express");
const routeOrder = express.Router();

const { AddToOrder, getOrder, cancelOrder } = require("./orderController");

routeOrder.post("/addOrder", AddToOrder);
routeOrder.get("/getOrder", getOrder);
routeOrder.delete("/:id", cancelOrder);

module.exports = routeOrder;
