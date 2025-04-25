const { model } = require("mongoose");

const {OrdersSchema} = require('../schemas/OrdersSchema');

const PositionModel = new model("order", OrdersSchema);

module.exports= {OrdersModel};