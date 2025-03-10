const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const BlogModel = mongoose.model("BlogModel", BlogSchema);
module.exports =BlogModel;
