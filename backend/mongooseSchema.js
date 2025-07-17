const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    domain: String,
    description: String
}, { timestamps: true });

const userModel = mongoose.model("formdata", formSchema);
module.exports = userModel;
