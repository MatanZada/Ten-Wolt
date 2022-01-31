const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: "The filed client is a required filed!",
        ref: "Client"
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        required: "The filed client is a required filed!",
        ref: "Store"
    },
}, {
    timestamps: true
})
orderSchema.methods.testFunc = function testFunc(params) {}
module.exports = mongoose.model('Order', orderSchema);