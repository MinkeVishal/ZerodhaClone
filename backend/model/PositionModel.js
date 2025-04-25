const { model } = require("mongoose");

const {PositionsSchema} = require('../schemas/PositionsSchema');

const PositionModel = new model("positon", PositionsSchema);

module.exports= {PositionModel};