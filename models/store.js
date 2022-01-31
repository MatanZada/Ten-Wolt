const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "The filed name is a required filed!"
    },
    adress: {
        type: String,
        required: "The filed adress is a required filed!"
    },
    phone: {
        type: String,
        required: "The filed phone is a required filed!"
    },
}, {
    timestamps: true
})
storeSchema.methods.testFunc = function testFunc(params) {}
module.exports = mongoose.model('Store', storeSchema);