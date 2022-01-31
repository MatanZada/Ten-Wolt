const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "The filed name is a required filed!"
    },
    adress: {
        type: String,
        required: "The filed adress is a required filed!"
    },
    isVip: {
        type: Boolean,
    },
    phone: {
        type: String,
        required: "The filed phone is a required filed!"
    },
}, {
    timestamps: true
})
clientSchema.methods.testFunc = function testFunc(params) {}
module.exports = mongoose.model('Client', clientSchema);