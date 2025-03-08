const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
}, { timestamps: true });

const BlogModel = mongoose.model("BlogModel", BlogSchema);
module.exports =BlogModel;
